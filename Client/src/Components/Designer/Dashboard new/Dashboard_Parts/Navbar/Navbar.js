import React from 'react'
import "./navbar.css"
import { useState } from 'react';

function Navbar() {
    const [isHamOn, setIsHamOn] = useState(false);
  const handleClick = () => {
    setIsHamOn(!isHamOn);
    };
    
//     const [isBtnOn, setIsBtnOn] = useState(false);
//   const handleClicknew = () => {
//     setIsBtnOn(!isBtnOn);
//     };
    
    
    return (
        <div className={isHamOn ? "maincontainerSidebar":"compressedSidebar"}>
            <div className="headerSidebar">
                <div className="cross" onClick={handleClick}>
                    <div className={isHamOn ? "null" : "lined" }>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11.0001H10.375" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 6.00006L16 6.00006" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 1L6.625 1" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className={isHamOn ? "crossed" : "null" }>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.0001 0.999981L11.4854 11.7266" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.0001 11.7266L11.4854 1" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {/* <div className={isHamOn ? "header" : "null"}>
                        Project 28
                    </div> */}
                </div>
            </div>
            <div className="buttons">
                <div className="button" tabindex="1" >
                    <div className="svg">{<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.75 16.0001V14.3334C14.75 13.4493 14.3878 12.6015 13.7432 11.9764C13.0985 11.3513 12.2242 11.0001 11.3125 11.0001H4.4375C3.52582 11.0001 2.65148 11.3513 2.00682 11.9764C1.36216 12.6015 1 13.4493 1 14.3334V16.0001" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.875 7.66667C9.77348 7.66667 11.3125 6.17428 11.3125 4.33333C11.3125 2.49238 9.77348 1 7.875 1C5.97652 1 4.4375 2.49238 4.4375 4.33333C4.4375 6.17428 5.97652 7.66667 7.875 7.66667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>}
                    </div>
                    <div className={isHamOn ? "menuname" : "null"} tabindex="1" >
                         <div /*className={isBtnOn? "menunameBold" : "menuname"}> */>
                        Dashboard
                        </div>
                        </div>
                </div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
            </div>
        </div>
    )
}

export default Navbar
