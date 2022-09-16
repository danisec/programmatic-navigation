import React from "react";
import { useNavigate } from "react-router-dom";

function ItemPost({ item }) {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/post-detail/${item.id}`, { replace: true });
  };

  return (
    <>
      <div className='mt-6 w-auto rounded-md bg-white p-4 shadow-md shadow-gray-100 hover:shadow-gray-200 hover:transition-all'>
        <div>
          <p className='text-lg font-normal text-gray-700'>
            {item.title.substr(0, 30)}
            {" ..."}
          </p>
        </div>

        <div className='mt-2 flex justify-end'>
          <button
            className='mt-6 h-10 w-28 rounded-md bg-blue-500 text-white hover:bg-blue-600 hover:transition-all'
            onClick={navigateToDetail}
          >
            Show detail
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemPost;
