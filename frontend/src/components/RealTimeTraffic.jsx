function RealTimeTraffic({ rx, tx }) {
    return (
      <div className="flex justify-evenly">
        <div className="flex items-center bg-red-200 rounded-full px-3 py-1 mr-2 mb-2">
          <span className="text-sm font-bold text-gray-700">RX:</span>
          <p className="ml-2">{rx}</p>
        </div>
  
        <div className="flex items-center bg-green-200 rounded-full px-3 py-1 mr-2 mb-2">
          <span className="text-sm font-bold text-gray-700">TX:</span>
          <p className="ml-2">{tx}</p>
        </div>
      </div>
    );
  }
  
  export default RealTimeTraffic;
  