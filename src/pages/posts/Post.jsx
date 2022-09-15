import React from 'react'
import { useParams } from 'react-router-dom'
import useAPI from '../../components/api/useAPI'

function Post() {
    let params = useParams()
    let items = useAPI()

    let item = items.data && items.data[params.itemId]

    return (
        <>
            <h1>Post</h1>
            <div>
                <p>
                    {item && item.title}
                </p>
                <p>
                    {item && item.body}
                </p>
            </div>
        </>
    )
}

export default Post