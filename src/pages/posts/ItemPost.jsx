import React from 'react'
import { useNavigate } from 'react-router-dom'

function ItemPost({ item }) {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <p>
                    {item.title}
                </p>

                <button onClick={() => navigate(`${item.id}`)}>Show detail</button>
            </div>
        </>
    )
}

export default ItemPost