import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const SOCKET_URL = "http://localhost:3000";
const useRealTimeTraffic = (hit) => {
  const [mostrarInformacion, setMostrarInformacion] = useState(false);
  const [traffic, setTraffic] = useState({ rx: '0.0B', tx: '0.0B' });
  const [showTraffic, setShowTraffic] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (mostrarInformacion) {
      const mikrotikInterface = `<pppoe-${hit.name}>`;
      const host = hit.host;
      const newSocket = io(SOCKET_URL);

      newSocket.emit('join', { host, mikrotikInterface });
      newSocket.on('traffic', (data) => {
        if (data) {
          setTraffic({
            rx: data.rx,
            tx: data.tx,
          });
          setShowTraffic(true);
        }
      });

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }
  }, [mostrarInformacion, hit]);

  const handleRealTimeTrafficClick = () => {
    setMostrarInformacion(true);
  };

    useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  return {mostrarInformacion,traffic, showTraffic, handleRealTimeTrafficClick };
};

export default useRealTimeTraffic;