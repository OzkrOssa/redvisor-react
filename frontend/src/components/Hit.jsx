import { useNavigate } from 'react-router-dom';


export function Hit({ hit }) {
  const navigate = useNavigate();

  const handleUserClick = (hit) => {
    navigate('/hit-details', { state: { hit } });
  };
  return (
    <div className='m-4 hover:bg-gray-50 items-center justify-center' key={hit.id} onClick={() => handleUserClick(hit)}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 truncate">{hit.name.toUpperCase()}</div>
          <p className="text-gray-700 text-base">
            {hit.bts}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hit.comment}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hit.profile}</span>
        </div>
      </div>
    </div>

  );
}