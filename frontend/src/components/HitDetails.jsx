import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import BarLoader from "react-spinners/BarLoader";
import formatTime from "../utils/formatTime";
import RealTimeTraffic from "./RealTimeTraffic";
import useUserInformation from "../hooks/useUserInformation";
import useRealTimeTraffic from "../hooks/useRealTimeTraffic";


const CONNECTION_TIMEOUT = 3000

export const HitDetails = () => {
  const location = useLocation();
  const { hit } = location.state;

  const {userInformation, loading} = useUserInformation(hit)
  const {mostrarInformacion, traffic, showTraffic, handleRealTimeTrafficClick} = useRealTimeTraffic(hit)
  
  const [connectionMessage, setConnectionMessage] = useState(
    <BarLoader
      color={"#000000"}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );

  useEffect(() => {
    const connectionTimer = setTimeout(() => {
      setConnectionMessage("Error al conectarse al servidor");
    }, CONNECTION_TIMEOUT);

    return () => {
      clearTimeout(connectionTimer);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div>
        <Link to="/" className="absolute top-0 left-0 m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        {loading ? (
          <ClipLoader
            color={"#000000"}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div>
            {userInformation && userInformation["uptime"] ? (
              <div>
                <p>{formatTime(userInformation["uptime"])}</p>
                {!mostrarInformacion && (
                  <button
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    onClick={handleRealTimeTrafficClick}
                  >
                    Ver Trafico en tiempo real
                  </button>
                )}
                {mostrarInformacion && (
                  <div className="flex justify-center">
                    {showTraffic ? (
                      <RealTimeTraffic rx={traffic.rx} tx={traffic.tx} />
                    ) : (
                      <p>{connectionMessage}</p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <p>Offline</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
