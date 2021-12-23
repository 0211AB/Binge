import React from 'react'
import './Footer.css'

import { GrFacebook } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
    return (
        <div className="footer">

            <div className="share">
                <a href="https://www.facebook.com/abhay.bajaj.319" target="_blank"> <GrFacebook /></a>
                <a href="https://github.com/0211AB" target="_blank"> <BsGithub /></a>
                <a href="https://www.instagram.com/_abhaybajaj/" target="_blank"> <AiFillInstagram /> </a>
                <a href="https://www.linkedin.com/in/abhay-bajaj-736913207/" target="_blank"> <AiFillLinkedin /></a>
            </div>

            <h1 className="credit"> created by &nbsp;<a href="#"> abhay bajaj  &nbsp;</a>  all rights reserved! </h1>

        </div>
    )
}
