import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PostDetil() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div>
        <button
          className='flex gap-2 transition-all delay-75 hover:-ml-1'
          onClick={navigateBack}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
            />
          </svg>
          <p className='font-medium text-gray-800'>Back to Home</p>
        </button>
      </div>

      <div className='mt-6'>
        <h1 className='text-2xl font-semibold text-gray-900'>Post Detail</h1>

        <Outlet />
      </div>
    </>
  );
}

export default PostDetil;
