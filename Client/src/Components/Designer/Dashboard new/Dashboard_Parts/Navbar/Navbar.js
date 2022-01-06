import React from 'react'
import "./navbar.css"
import { useState } from 'react';
import Toggle from '../../../ToggleSwitch/Toggle';
import {ReactComponent as Kit} from './assets/starterkit.svg'
import { useHistory } from 'react-router';
function Navbar({email}) {
    const history = useHistory();
    //const email = 'f20190120@hydrabad.bits-pilani.ac.in';
    //const history = useHistory();
    console.log("from nav", email);
    const [isHamOn, setIsHamOn] = useState(false);
  const handleClick = () => {
    setIsHamOn(!isHamOn);
    };
    
//     const [isBtnOn, setIsBtnOn] = useState(false);
//   const handleClicknew = () => {
//     setIsBtnOn(!isBtnOn);
//     };
    const [ActiveTopic, setActiveTopic] = useState(0);

    const toggleActive = (id) => {
         setActiveTopic(id);
        console.log("this", ActiveTopic)
    }

    const arr = [
        {
            id: 1,
            menuname: "Your Dashboard",
            nav:'/home',
            img: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.83333 1.00012H1V6.83346H6.83333V1.00012Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.0003 1.00012H10.167V6.83346H16.0003V1.00012Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.0003 10.1667H10.167V16.0001H16.0003V10.1667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.83333 10.1667H1V16.0001H6.83333V10.1667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            
                ,
            imgalt: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.83333 1.00015H1V6.83349H6.83333V1.00015Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.9993 1.00009H10.166V6.83342H15.9993V1.00009Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.9993 10.1667H10.166V16.0001H15.9993V10.1667Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.83333 10.1667H1V16.0001H6.83333V10.1667Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

        },
        {
            id: 2,
            menuname: "Your Profile",
            nav:'/designer/profile',
            img: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.75 16.0001V14.3334C14.75 13.4493 14.3878 12.6015 13.7432 11.9764C13.0985 11.3513 12.2242 11.0001 11.3125 11.0001H4.4375C3.52582 11.0001 2.65148 11.3513 2.00682 11.9764C1.36216 12.6015 1 13.4493 1 14.3334V16.0001" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.875 7.66667C9.77348 7.66667 11.3125 6.17428 11.3125 4.33333C11.3125 2.49238 9.77348 1 7.875 1C5.97652 1 4.4375 2.49238 4.4375 4.33333C4.4375 6.17428 5.97652 7.66667 7.875 7.66667Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

            
                ,
            imgalt: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 16.0001V14.3334C14.75 13.4493 14.3878 12.6015 13.7432 11.9764C13.0985 11.3513 12.2242 11.0001 11.3125 11.0001H4.4375C3.52582 11.0001 2.65148 11.3513 2.00682 11.9764C1.36216 12.6015 1 13.4493 1 14.3334V16.0001" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.875 7.66667C9.77348 7.66667 11.3125 6.17428 11.3125 4.33333C11.3125 2.49238 9.77348 1 7.875 1C5.97652 1 4.4375 2.49238 4.4375 4.33333C4.4375 6.17428 5.97652 7.66667 7.875 7.66667Z" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
        },
        {
            id: 3,
            menuname: "Overall Performance",
            nav:'/designer/performance',
            img: <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 17V7" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 17V1" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 17V13" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                ,
            imgalt: <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 17V7" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 17V1" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 17V13" stroke="#19BAA8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

        },
        {
            id: 4,
            menuname: "Help & Support",
            nav:'/',
            img: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.875 16C13.0171 16 16.375 12.6421 16.375 8.5C16.375 4.35786 13.0171 1 8.875 1C4.73286 1 1.375 4.35786 1.375 8.5C1.375 12.6421 4.73286 16 8.875 16Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.69336 6.25009C6.86969 5.74884 7.21772 5.32617 7.67583 5.05694C8.13393 4.78771 8.67253 4.6893 9.19624 4.77913C9.71995 4.86896 10.195 5.14123 10.5372 5.54774C10.8794 5.95424 11.0667 6.46873 11.0659 7.00009C11.0659 8.50009 8.81586 9.25009 8.81586 9.25009" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.875 12.2499H8.88274" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                ,
            imgalt: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.875 16C13.0171 16 16.375 12.6421 16.375 8.5C16.375 4.35786 13.0171 1 8.875 1C4.73286 1 1.375 4.35786 1.375 8.5C1.375 12.6421 4.73286 16 8.875 16Z" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.69336 6.25009C6.86969 5.74884 7.21772 5.32617 7.67583 5.05694C8.13393 4.78771 8.67253 4.6893 9.19624 4.77913C9.71995 4.86896 10.195 5.14123 10.5372 5.54774C10.8794 5.95424 11.0667 6.46873 11.0659 7.00009C11.0659 8.50009 8.81586 9.25009 8.81586 9.25009" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.875 12.2499H8.88274" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        },
        // {
        //     id: 5,
        //     menuname: "Your Availability",
        //     img: <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M15 0H7C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14H15C18.866 14 22 10.866 22 7C22 3.13401 18.866 0 15 0Z" fill="#19BAA8"/>
        //         <path d="M15 10C16.6569 10 18 8.65685 18 7C18 5.34315 16.6569 4 15 4C13.3431 4 12 5.34315 12 7C12 8.65685 13.3431 10 15 10Z" fill="white"/>
        //         </svg>,

        //     imgalt: <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M15 0H7C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14H15C18.866 14 22 10.866 22 7C22 3.13401 18.866 0 15 0Z" fill="#19BAA8"/>
        //             <path d="M15 10C16.6569 10 18 8.65685 18 7C18 5.34315 16.6569 4 15 4C13.3431 4 12 5.34315 12 7C12 8.65685 13.3431 10 15 10Z" fill="white"/>
        //             </svg>

        // },
        {
            id: 6,
            menuname: "Logout",
            nav:"/",
            img: <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66667 2.57143C6.66667 1.88944 6.94762 1.23539 7.44772 0.753154C7.94781 0.270918 8.62609 0 9.33333 0C10.0406 0 10.7189 0.270918 11.219 0.753154C11.719 1.23539 12 1.88944 12 2.57143H14C14.5304 2.57143 15.0391 2.77462 15.4142 3.13629C15.7893 3.49797 16 3.98851 16 4.5V7.71429H14.6667C14.313 7.71429 13.9739 7.84974 13.7239 8.09086C13.4738 8.33198 13.3333 8.65901 13.3333 9C13.3333 9.34099 13.4738 9.66802 13.7239 9.90914C13.9739 10.1503 14.313 10.2857 14.6667 10.2857H16V13.5C16 14.0115 15.7893 14.502 15.4142 14.8637C15.0391 15.2254 14.5304 15.4286 14 15.4286H12C12 16.1106 11.719 16.7646 11.219 17.2468C10.7189 17.7291 10.0406 18 9.33333 18C8.62609 18 7.94781 17.7291 7.44772 17.2468C6.94762 16.7646 6.66667 16.1106 6.66667 15.4286H4.66667C4.13623 15.4286 3.62753 15.2254 3.25245 14.8637C2.87738 14.502 2.66667 14.0115 2.66667 13.5V11.5714C1.95942 11.5714 1.28115 11.3005 0.781048 10.8183C0.280951 10.336 0 9.68198 0 9C0 8.31801 0.280951 7.66396 0.781048 7.18173C1.28115 6.69949 1.95942 6.42857 2.66667 6.42857V4.5C2.66667 3.98851 2.87738 3.49797 3.25245 3.13629C3.62753 2.77462 4.13623 2.57143 4.66667 2.57143H6.66667ZM9.33333 1.28571C8.97971 1.28571 8.64057 1.42117 8.39052 1.66229C8.14048 1.90341 8 2.23044 8 2.57143V3.85714H4.66667C4.48986 3.85714 4.32029 3.92487 4.19526 4.04543C4.07024 4.16599 4 4.3295 4 4.5V7.71429H2.66667C2.31304 7.71429 1.97391 7.84974 1.72386 8.09086C1.47381 8.33198 1.33333 8.65901 1.33333 9C1.33333 9.34099 1.47381 9.66802 1.72386 9.90914C1.97391 10.1503 2.31304 10.2857 2.66667 10.2857H4V13.5C4 13.6705 4.07024 13.834 4.19526 13.9546C4.32029 14.0751 4.48986 14.1429 4.66667 14.1429H8V15.4286C8 15.7696 8.14048 16.0966 8.39052 16.3377C8.64057 16.5788 8.97971 16.7143 9.33333 16.7143C9.68696 16.7143 10.0261 16.5788 10.2761 16.3377C10.5262 16.0966 10.6667 15.7696 10.6667 15.4286V14.1429H14C14.1768 14.1429 14.3464 14.0751 14.4714 13.9546C14.5964 13.834 14.6667 13.6705 14.6667 13.5V11.5714C13.9594 11.5714 13.2811 11.3005 12.781 10.8183C12.281 10.336 12 9.68198 12 9C12 8.31801 12.281 7.66396 12.781 7.18173C13.2811 6.69949 13.9594 6.42857 14.6667 6.42857V4.5C14.6667 4.3295 14.5964 4.16599 14.4714 4.04543C14.3464 3.92487 14.1768 3.85714 14 3.85714H10.6667V2.57143C10.6667 2.23044 10.5262 1.90341 10.2761 1.66229C10.0261 1.42117 9.68696 1.28571 9.33333 1.28571Z" fill="#1E1F1E"/>
                </svg>,
            imgalt: <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66667 2.57143C6.66667 1.88944 6.94762 1.23539 7.44772 0.753154C7.94781 0.270918 8.62609 0 9.33333 0C10.0406 0 10.7189 0.270918 11.219 0.753154C11.719 1.23539 12 1.88944 12 2.57143H14C14.5304 2.57143 15.0391 2.77462 15.4142 3.13629C15.7893 3.49797 16 3.98851 16 4.5V7.71429H14.6667C14.313 7.71429 13.9739 7.84974 13.7239 8.09086C13.4738 8.33198 13.3333 8.65901 13.3333 9C13.3333 9.34099 13.4738 9.66802 13.7239 9.90914C13.9739 10.1503 14.313 10.2857 14.6667 10.2857H16V13.5C16 14.0115 15.7893 14.502 15.4142 14.8637C15.0391 15.2254 14.5304 15.4286 14 15.4286H12C12 16.1106 11.719 16.7646 11.219 17.2468C10.7189 17.7291 10.0406 18 9.33333 18C8.62609 18 7.94781 17.7291 7.44772 17.2468C6.94762 16.7646 6.66667 16.1106 6.66667 15.4286H4.66667C4.13623 15.4286 3.62753 15.2254 3.25245 14.8637C2.87738 14.502 2.66667 14.0115 2.66667 13.5V11.5714C1.95942 11.5714 1.28115 11.3005 0.781048 10.8183C0.280951 10.336 0 9.68198 0 9C0 8.31801 0.280951 7.66396 0.781048 7.18173C1.28115 6.69949 1.95942 6.42857 2.66667 6.42857V4.5C2.66667 3.98851 2.87738 3.49797 3.25245 3.13629C3.62753 2.77462 4.13623 2.57143 4.66667 2.57143H6.66667ZM9.33333 1.28571C8.97971 1.28571 8.64057 1.42117 8.39052 1.66229C8.14048 1.90341 8 2.23044 8 2.57143V3.85714H4.66667C4.48986 3.85714 4.32029 3.92487 4.19526 4.04543C4.07024 4.16599 4 4.3295 4 4.5V7.71429H2.66667C2.31304 7.71429 1.97391 7.84974 1.72386 8.09086C1.47381 8.33198 1.33333 8.65901 1.33333 9C1.33333 9.34099 1.47381 9.66802 1.72386 9.90914C1.97391 10.1503 2.31304 10.2857 2.66667 10.2857H4V13.5C4 13.6705 4.07024 13.834 4.19526 13.9546C4.32029 14.0751 4.48986 14.1429 4.66667 14.1429H8V15.4286C8 15.7696 8.14048 16.0966 8.39052 16.3377C8.64057 16.5788 8.97971 16.7143 9.33333 16.7143C9.68696 16.7143 10.0261 16.5788 10.2761 16.3377C10.5262 16.0966 10.6667 15.7696 10.6667 15.4286V14.1429H14C14.1768 14.1429 14.3464 14.0751 14.4714 13.9546C14.5964 13.834 14.6667 13.6705 14.6667 13.5V11.5714C13.9594 11.5714 13.2811 11.3005 12.781 10.8183C12.281 10.336 12 9.68198 12 9C12 8.31801 12.281 7.66396 12.781 7.18173C13.2811 6.69949 13.9594 6.42857 14.6667 6.42857V4.5C14.6667 4.3295 14.5964 4.16599 14.4714 4.04543C14.3464 3.92487 14.1768 3.85714 14 3.85714H10.6667V2.57143C10.6667 2.23044 10.5262 1.90341 10.2761 1.66229C10.0261 1.42117 9.68696 1.28571 9.33333 1.28571Z" fill="#1E1F1E"/>
                    </svg>,

        }
    ]
    
    return (
        <>
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
            <div className="buttons"   >
                {arr.map((arr, key) => {
                    return(
                        <div className="button" key={key} onClick={(e) => { history.push(arr.nav, {email});toggleActive(key); }} >
                            <div className={arr.id==ActiveTopic ? "null" : "svg"} >{arr.img}</div>
                            <div className={arr.id==ActiveTopic? "svg" : "null"} > {arr.imgalt}</div>
                    <div className={isHamOn ? "menuname" : "null"}  >
                         <div className={arr.id==ActiveTopic? "menunameBold" : "menuname1"} > 
                            {arr.menuname}
                        </div>
                    </div>
                </div>
                    )
                })}
                     <div className="button" key="5" onClick={(e) => { toggleActive(arr.id) }} >
                        <Toggle/>
                    <div className={isHamOn ? "menuname" : "null"}  >
                         <div className={arr.id==ActiveTopic? "menunameBold" : "menuname1"} > 
                            Your Availability
                        </div>
                    </div>
                    </div>
                    <div className="buttonLower" key="6">
                        <a href="#" download><Kit /></a>
                        <div className={isHamOn ? "menuname" : "null"}>
                            Download StarterKit
                        </div>
                    </div>
            </div>
            </div>
        <div className="hamNav">
                <div className={isHamOn ? "null" : "lined"} onClick={handleClick}>
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11.0001H10.375" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 6.00006L16 6.00006" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 1L6.625 1" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={isHamOn ? "crossed" : "null" } onClick={handleClick}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.0001 0.999981L11.4854 11.7266" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.0001 11.7266L11.4854 1" stroke="#1E1F1E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={isHamOn ? "hamMenu" : "null"}>
                    <div className="HamButtons">
                        {arr.map((arr) => {
                            return(
                            <div className="HamButton" id={arr.id} onClick={handleClick}>
                            <div className="logo">{arr.img}</div>
                            <div className="ButtonName">{arr.menuname}</div>
                        </div>
                        )})}
                    </div>
                </div>
        </div>
    </>
    )
}

export default Navbar
