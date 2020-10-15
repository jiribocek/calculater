import React from 'react';
import './Menu.css';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import CakeIcon from '@material-ui/icons/Cake';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import TocIcon from '@material-ui/icons/Toc';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SpeedIcon from '@material-ui/icons/Speed';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LoopIcon from '@material-ui/icons/Loop';

function Menu() {
    return (
        <div className='all'>
            <div className='wrapper'>
                <div className='menu_icon'>
                    <div className='inside_div'>
                        <AccessibilityIcon/>
                        <p className='par'>BMI</p>
                    </div>
                </div>
                <div className='menu_icon'>
                    <div className='inside_div'>
                        <CakeIcon/>
                        <p className='par'>Věk</p>
                    </div>
                </div>
                <div className='menu_icon'>
                    <div className='inside_div'>
                        <LoyaltyIcon/>
                        <p className='par'>Sleva</p>
                    </div>
                </div>
              
            
            
                <div className='menu_icon'>
                   
                    <AssessmentIcon/>
                    <p className='par'>Procenta</p>
                    
                </div>
                <div className='menu_icon'>
                    <DateRangeIcon/>
                    <p className='par'>Datum</p>
                </div>
                <div className='menu_icon'>
                    <SquareFootIcon/>
                    <p className='par'> Délka</p>
                </div>
              
            
            
                <div className='menu_icon'>
                    <TocIcon/>
                    <p className='par'>Obsah</p>
                </div>
                <div className='menu_icon'>
                    <CheckBoxOutlineBlankIcon/>
                    <p className='par'>Objem</p>
                </div>
                <div className='menu_icon'>
                    <WbSunnyIcon/>
                    <p className='par'>Teplota</p>
                </div>
              
            
                <div className='menu_icon'>
                    <SpeedIcon/>
                    <p className='par'>Speed</p>
                </div>
                <div className='menu_icon'>
                    <QueryBuilderIcon/>
                    <p className='par'>Čas</p>
                </div>
                <div className='menu_icon'>
                    <PersonOutlineIcon/>
                     <p className='par'>Hmotnost</p>
                </div>
              
                     
                <div className='menu_icon'>
                    <LoopIcon/>
                    <p className='par'>Numerický systém</p>
                </div>
            

            </div>   

            
        </div>   

    )
}

export default Menu
