import React from 'react'
import './Footer.css'

import { GrFacebook } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
    return (
        <div className="footer">

            <div className="share">
                <a href="#"> <GrFacebook /></a>
                <a href="#"> <BsGithub /></a>
                <a href="#"> <AiFillInstagram /> </a>
                <a href="#"> <AiFillLinkedin /></a>
            </div>

            <h1 className="credit"> created by &nbsp;<a href="#"> abhay bajaj  &nbsp;</a>  all rights reserved! </h1>

        </div>
    )
}
