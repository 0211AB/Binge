import React from 'react'
import './Box.css'

export default function Box(props) {
    var url

    if (props.img !== null)
        url = `https://image.tmdb.org/t/p/original${props.img}`
    else
        url = `https://www.ttdyradio.com/archive/archive_images/poster_unavailable.jpg`

    //console.log(url)
    return (
        <div className="box">
            <button className="releasedate btn">{props.date}</button>
            <img src={url} alt="" />
            <div className="info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
