import React,{useRef, useState} from 'react'
import './ProfileMain.css';
import Professional from './Profile parts/Professional/Professional';
import Personal from './Profile parts/Personal/Personal';
//import data from './desProf.json';
import { useLocation } from 'react-router';
import { getDocData } from '../../../firebasefunctions/firestore';
import Navbar from '../Dashboard new/Dashboard_Parts/Navbar/Navbar';
import { Update } from '../../../firebasefunctions/firestore';
import { BarWave } from "react-cssfx-loading";
import Navbar2 from '../../Navbar/Navbar2';

function ProfileMain() {
    //const location = useLocation();
    //const email = location.state.email;
    //const email = atob(window.sessionStorage.getItem("key"));
    const nameRef = useRef('DarthVader');
    let special = useRef('');//data.specialization;
    let [checkedState,setCheckedState] = useState(['this', "this"]);//data.specialization_state);
    let work1Ref = useRef("data.exp1");
    let work2Ref = useRef("data.exp2");
    let work3Ref = useRef("data.exp3");
    let linkRef = useRef("data.link");

    const email = 'ragh12345@gmail.com'
    const [data,setData ] = useState();
    
    if(!data){
        getDocData('Designers',email ).then((data1)=>{
            setData(data1);console.log(data1);
        })
    }
    
    const handleSubmit = async(field, value) =>{
        console.log("updated: ", data);
        startLoading(true)
        await Update('Designers', email, data);
        startLoading(false);
    }
    const startLoading = (x)=>{
        if(x)
        {var element = document.getElementById('loading');
        element.style.display = null;
        var element1 = document.getElementById('screen');
        element1.style.opacity = 0.16;
        } else {
          var element = document.getElementById('loading');
          element.style.display = "none";
          var element1 = document.getElementById('screen');
          element1.style.opacity = 10;
          
        }
    }
    

    return (
        <div>
            <Navbar2/>
        <div id= "screen"  style={{backgroundColor:"#4d494905"}}>

        <div className="Sidebar">
          <Navbar {...{email}} />
        </div>

            {data ? (
            <div className='des-profile-container'>
                <div className='des-profile-per'>
                    <Personal {...{data, setData}}/>
                </div>
                <div className='des-profile-pro'>
                    <Professional {...{data, setData}}/>
                </div>
            </div>
            ) : (<div></div>)
            
        }
            <div className='des-pro-but-cover'>
                <button className='des-pro-but' onClick={handleSubmit}>Save Changes & Proceed</button>
            </div>

        </div>
        <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
             <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Updating</p>
        </div>
        </div>
    )
}

export default ProfileMain
