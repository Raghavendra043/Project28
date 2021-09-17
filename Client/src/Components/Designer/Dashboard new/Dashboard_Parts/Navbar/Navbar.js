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
    const [ActiveTopic, setActiveTopic] = useState(1);

    const toggleActive = (event) => {
         setActiveTopic(event.target.id);
        console.log(ActiveTopic)
    }

    const arr = [
        {
            id: 1,
            menuname: "Dashboard",
            img: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.83333 1.00012H1V6.83346H6.83333V1.00012Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.0003 1.00012H10.167V6.83346H16.0003V1.00012Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.0003 10.1667H10.167V16.0001H16.0003V10.1667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.83333 10.1667H1V16.0001H6.83333V10.1667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            
                ,
            imgalt: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 16.0001V14.3334C14.75 13.4493 14.3878 12.6015 13.7432 11.9764C13.0985 11.3513 12.2242 11.0001 11.3125 11.0001H4.4375C3.52582 11.0001 2.65148 11.3513 2.00682 11.9764C1.36216 12.6015 1 13.4493 1 14.3334V16.0001" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.875 7.66667C9.77348 7.66667 11.3125 6.17428 11.3125 4.33333C11.3125 2.49238 9.77348 1 7.875 1C5.97652 1 4.4375 2.49238 4.4375 4.33333C4.4375 6.17428 5.97652 7.66667 7.875 7.66667Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
        },
        {
            id: 3,
            menuname: "Dashboard",
            img: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.83333 1.00012H1V6.83346H6.83333V1.00012Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.0003 1.00012H10.167V6.83346H16.0003V1.00012Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.0003 10.1667H10.167V16.0001H16.0003V10.1667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.83333 10.1667H1V16.0001H6.83333V10.1667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            
                ,
            imgalt: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 16.0001V14.3334C14.75 13.4493 14.3878 12.6015 13.7432 11.9764C13.0985 11.3513 12.2242 11.0001 11.3125 11.0001H4.4375C3.52582 11.0001 2.65148 11.3513 2.00682 11.9764C1.36216 12.6015 1 13.4493 1 14.3334V16.0001" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.875 7.66667C9.77348 7.66667 11.3125 6.17428 11.3125 4.33333C11.3125 2.49238 9.77348 1 7.875 1C5.97652 1 4.4375 2.49238 4.4375 4.33333C4.4375 6.17428 5.97652 7.66667 7.875 7.66667Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
        },
        {
            id: 4,
            menuname: "Dashboard",
            img: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.83333 1.00012H1V6.83346H6.83333V1.00012Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.0003 1.00012H10.167V6.83346H16.0003V1.00012Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.0003 10.1667H10.167V16.0001H16.0003V10.1667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.83333 10.1667H1V16.0001H6.83333V10.1667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            
                ,
            imgalt: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 16.0001V14.3334C14.75 13.4493 14.3878 12.6015 13.7432 11.9764C13.0985 11.3513 12.2242 11.0001 11.3125 11.0001H4.4375C3.52582 11.0001 2.65148 11.3513 2.00682 11.9764C1.36216 12.6015 1 13.4493 1 14.3334V16.0001" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.875 7.66667C9.77348 7.66667 11.3125 6.17428 11.3125 4.33333C11.3125 2.49238 9.77348 1 7.875 1C5.97652 1 4.4375 2.49238 4.4375 4.33333C4.4375 6.17428 5.97652 7.66667 7.875 7.66667Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
        },
        {
            id: 2,
            menuname: "Profile",
            img: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.75 16.0001V14.3334C14.75 13.4493 14.3878 12.6015 13.7432 11.9764C13.0985 11.3513 12.2242 11.0001 11.3125 11.0001H4.4375C3.52582 11.0001 2.65148 11.3513 2.00682 11.9764C1.36216 12.6015 1 13.4493 1 14.3334V16.0001" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.875 7.66667C9.77348 7.66667 11.3125 6.17428 11.3125 4.33333C11.3125 2.49238 9.77348 1 7.875 1C5.97652 1 4.4375 2.49238 4.4375 4.33333C4.4375 6.17428 5.97652 7.66667 7.875 7.66667Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                ,
            imgalt: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 16.0001V14.3334C14.75 13.4493 14.3878 12.6015 13.7432 11.9764C13.0985 11.3513 12.2242 11.0001 11.3125 11.0001H4.4375C3.52582 11.0001 2.65148 11.3513 2.00682 11.9764C1.36216 12.6015 1 13.4493 1 14.3334V16.0001" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.875 7.66667C9.77348 7.66667 11.3125 6.17428 11.3125 4.33333C11.3125 2.49238 9.77348 1 7.875 1C5.97652 1 4.4375 2.49238 4.4375 4.33333C4.4375 6.17428 5.97652 7.66667 7.875 7.66667Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
        },
    ]
    
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
            <div className="buttons"  >
                {arr.map((arr) => {
                    return(
                <div className="button" key={arr.id} id={arr.id}  onClick={toggleActive} >
                    <div className={arr.id==ActiveTopic ? "null" : "svg"} >{arr.img}</div>
                    <div className={arr.id==ActiveTopic? "svg" : "null"}> {arr.imgalt}</div>
                    <div className={isHamOn ? "menuname" : "null"} >
                         <div className={arr.id==ActiveTopic? "menunameBold" : "menuname"}> 
                            {arr.menuname}
                        </div>
                    </div>
                </div>
                )})}
            </div>
        </div>
    )
}

export default Navbar
