import React from 'react'

import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HomeIcon from '@mui/icons-material/Home';

import './tinderNav.css'
export default function TinderNav() {
    return (
        <div>
            <ul className='d-flex justify-content-around'>
                <li className='text-center'><Link to='/tinder/profile'>
                    <PersonIcon /> <br /> Profile
                </Link></li>
                <li className='text-center'><Link to='/tinder/home'>
                    <HomeIcon /> <br /> Home
                </Link></li>
                <li className='text-center'><Link to='/tinder/chats'>
                    <QuestionAnswerIcon /> <br />chats
                </Link></li>
            </ul>
        </div>
    )
}
