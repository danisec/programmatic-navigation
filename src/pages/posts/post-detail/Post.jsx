import React from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../../components/api/useAPI";

function Post() {
  let params = useParams();
  let items = useAPI();

  let item =
    items.data && items.data.find((item) => item.id === Number(params.itemId));

  return (
    <>
      <div className='mt-6'>
        <p>
          <strong>Title : </strong>
          {item && item.title}
        </p>

        <p className='mt-2'>
          <strong>Content : </strong>
          {item && item.body}
        </p>
      </div>
    </>
  );
}

export default Post;
