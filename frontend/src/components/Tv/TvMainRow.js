import React from 'react'
import './TvMainRow.css'
import { AiFillYoutube } from 'react-icons/ai';
import { RiNetflixFill } from 'react-icons/ri'

export default function TvMainRow(props) {

    const url = `https://image.tmdb.org/t/p/original${props.img}`
    return (
        <div className="row ">
            <div className="image">
                <img src={url} alt="" />
            </div>

            <div className="content black">
                <h3>{props.name} &nbsp;</h3>
                <a href="https://www.netflix.com/in/title/80192098" target="_blank"> <RiNetflixFill /></a>
                <a href="https://www.youtube.com/watch?v=_InqQJRqGW4" target="_blank"> <AiFillYoutube /></a>
                <p>{props.overview}</p>
                <p><span>Rating &nbsp;{props.rating}</span></p>
            </div>

        </div>
    )
}
