import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function calc() {
    return (
        <div className='calc'>
            <div className='calc_header'>
                <div className='header_option'>
                    <CompareArrowsIcon />

                </div>
                <div className='header_option'>
                    <Link to="/menu">Menu</Link>

                </div>
                <div className='header_option'>
                    <Link to="/calc">Calc</Link>

                </div>
                <div className='header_option'>
                    <HomeIcon />

                </div>
                <div className='header_option'>
                    <MoreVertIcon />

                </div>


            </div>

            <div className='calc_body'>

            </div>
            
        </div>
    )
}

export default calc
