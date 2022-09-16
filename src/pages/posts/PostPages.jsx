import React from "react";
import useAPI from "../../components/api/useAPI";
import ItemPost from "./ItemPost";

function PostPages() {
  const { data } = useAPI();

  return (
    <>
      <h1 className='text-2xl font-semibold text-gray-900'>Post Pages</h1>

      <div className='mt-6 grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10'>
        {data &&
          Object.keys(data).map((item) => (
            <ItemPost key={item} item={data[item]} />
          ))}
      </div>
    </>
  );
}

export default PostPages;
