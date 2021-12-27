import React, { useState, useEffect } from 'react'
import Button from './Button'
import './TvGenres.css'

export default function TvGenres(props) {
    const [data, setData] = useState([])
    const [isData, setisData] = useState(false)

    useEffect(async () => {
        const response = await fetch('http://localhost:8000/genre/tvlist',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        setData(await response.json())
        setisData(true)
    }, [])

    return (
        <div className="genres">

            {isData && data.genres.map((e) => {
                return <Button key={e.id} name={e.name} />
            })}
        </div>
    )
}
