import React from 'react'
import { Outlet } from 'react-router-dom'
import useAPI from '../../components/api/useAPI'
import ItemPost from './ItemPost'

function PostPages() {
    const { data } = useAPI()

    return (
        <>
            <h1>Post Pages</h1>

            <div>
                {
                    data && Object.keys(data).map(item => (
                        <ItemPost key={item} item={data[item]} />
                    ))
                }
            </div>

            <Outlet />
        </>
    )
}

export default PostPages