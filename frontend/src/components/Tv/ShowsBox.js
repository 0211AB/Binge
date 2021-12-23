import React, { useEffect, useState } from 'react'
import './ShowsBox.css'

export default function ShowsBox(props) {

    const [data, setData] = useState({})
    const [key,setKey]=useState('')
    var urlkey
    useEffect(() => {

        const fetchgenres = async () => {
            const response = await fetch(`http://localhost:8000/tv/${props.id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            const json_response = await response.json()
            setData(json_response.genres)
        }
        fetchgenres()
    }, [])

    useEffect(() => {

        const fetchvideourl = async () => {
            const response = await fetch(`http://localhost:8000/tv/videos/${props.id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            const json_response = await response.json()
            if(json_response.results.length>0)
            setKey(json_response.results[0].key)
        }
        fetchvideourl()
    }, [])
    console.log(key)
    const url = `https://image.tmdb.org/t/p/original${props.img}`

    return (
        <div className="box">
            <img src={url} alt="" />
            <div className="info">
                <h3>{props.title}</h3>
                <p>{props.overview}</p>
                <a href={`https://www.youtube.com/watch?v=${key}`} className="btn">watch online</a>
            </div>
        </div >
    )
}
