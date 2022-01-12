import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { getData, search, Update } from '../../../firebasefunctions/firestore';
import Navbar3 from '../../Navbar/Navbar3';
import styles from "./Utilites.module.css";
import classnames from "classnames";
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CreateChat } from '../../../trail/createchat';

const data1 = [
      {
        col1: '',
        col2: '',
        col3: '',
        col4:<button></button>,
        col5:"",
        col6:""
      }
    ]

    const columns = [
          {
            Header: 'S.no',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Name',
            accessor: 'col2',
          },
          {
            Header: 'Phone Number',
            accessor: 'col3', // accessor is the "key" in the data
          },
          {
           Header: 'Email',
           accessor: 'col4', // accessor is the "key" in the data
         },
         {
           Header: 'created',
           accessor: 'col5', // accessor is the "key" in the data
         },
         {
           Header: 'check Profile',
           accessor: 'col6', // accessor is the "key" in the data
         },
         {
          Header: 'Profile Complete',
          accessor: 'col6', // accessor is the "key" in the data
        }
        ]
    
function Designer() {
    const history = useHistory();
    const location = useLocation();
    const [Data, setData] = useState(data1);
    const [total, setTotal] = useState(null);
    const [final, setFinal] = useState(null);
    let title;
    let stage;
    let clientPay;
    let designerPay;
    let start;
    let end;
    if('state' in location && !title){
      title  = location.state.title;
      stage =  location.state.stage;
      clientPay = location.state.clientPay;
      designerPay = location.state.designerPay;
      start = location.state.start;
      end = location.state.end;
    }

    const viewHandler = (id) => {
      var modal = document.getElementById("projectModal");
      modal.style.display = "block";
      setFinal(total[id]);

    };

    if(Data === data1){
      getData(`Designers`)
            .then((project) => {
              setTotal(project)
              let data = [];
                for(let i=0;i<project.length;i+=1){
                    let profile;
                    if(project.profile){profile = "Complete"}else {profile="Not complete"}

                    data.push({
                        col1:i+1,
                        col2:project[i].name,
                        col3:project[i].phone,
                        col4:project[i].email,
                        col5:project[i]['created'],
                        col6:<button
                            onClick={()=>{
                              viewHandler(i);
                            }}
                        >View</button>,
                        col7:profile
                    })
                }
                setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    let {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data:Data }, useSortBy);
    

    const closeHandler = () => {
      var modal = document.getElementById("projectModal");
      modal.style.display = "none";
      //modal = document.getElementById("projectModalView");
      //modal.style.display = "none";
      //modal = document.getElementById("projectModalGive");
      //modal.style.display = "none";
    };
 return (
     <div>
         <Navbar3/>
     
     <div style={{marginTop:"10vh", alignItems:"center"}}>
         
     <h2 style={{textAlign:"center", marginBottom:"40px", marginTop:"15vh"}}>Designers List</h2>

       <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
         <thead>
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <th
                       {...column.getHeaderProps(column.getSortByToggleProps())}
                       style={{
                         borderBottom: 'solid 3px blue',
                         color: 'black',
                       }}
                   >
                     {column.render('Header')}
                     <span>
                       {column.isSorted
                           ? column.isSortedDesc
                               ? '🔽'
                               : '🔼'
                           : ''}
                    </span>
                   </th>
               ))}
             </tr>
         ))}
         </thead>
         <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
               <tr {...row.getRowProps()}>
                 {row.cells.map(cell => {
                   return (
                       <td
                           {...cell.getCellProps()}
                           style={{
                             padding: '10px',
                             border: 'solid 1px gray',
                           }}
                       >
                         {cell.render('Cell')}
                       </td>
                   )
                 })}
               </tr>
           )
         })}
         </tbody>
       </table>

       
     </div>

     <div id="projectModal" class={styles.modal} style={{display:"none"}}>
        <div class={styles.modal_content}>
          <span class={styles.close} onClick={closeHandler}>
            &times;
          </span>
          <div className={styles.title}>Designer Details</div>
          {final ? (<table>
            <tr>
              <td>Name :</td>
              <td>{final.name}</td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>{final.email}</td>
            </tr>
            <tr>
              <td>Phone Number :</td>
              <td>{final.phone}</td>
            </tr>
            <tr>
              <td>Payment : </td>
              <td>{final.payment}</td>
            </tr>
            <tr>
              <td>Profile Link : </td>
              <td>{final.profileLink}</td>
            </tr>
            <tr>
              <td>Created : </td>
              <td>{final.created}</td>
            </tr>
            
          </table>):(<></>)}
          <div className={styles.actions}>
            <div className={styles.button_cover}>
              {title ? (<button className={classnames(styles.button)}
                onClick={async()=>{
                  try{
                  toast('loading...');
                  console.log(title);
                  var project = await search('Projects', "title", title);
                  console.log("from list", project);
                  project['projectInfo']['start'] = start;
                  project['projectInfo']['end'] = end;
                  project['projectInfo']['clientPay'] = clientPay;
                  project['projectInfo']['designerPay'] = designerPay;
                  project['designerEmail'] = final.email;
                  project['assigned'] = true;
                  project['designerAssigned'] = new Date().toString();
                  project['stageCount'] = stage;
                  project['designerNotification'] = []
                  project['clientNotification'] = []
                  project['files'] = {}
                  for(let i=0;i<stage;i++){
                    if(i===0){
                      project['files'][`${i}`] =  {}
                      project['files'][`${i}`]["files"] = [];}else{
                    project['files'][`${i}`] = {
                      adminApproval:false,
                      adminFeedback:[],
                      adminFiles:[],
                      approved:false,
                      clientApproval:false,
                      clientFeedback:[],
                      clientFiles:[],
                      currentState:"",
                      designerFiles:[],
                      feedback:[],
                    };
                  
                  }
                  }
                  project['currentStage'] = 0
                  await Update('Projects', title, project);
                  CreateChat(final.email, project.clientEmail, title).then(()=>{})
                  history.push( '/admin/project',{title});
                   const content = {
                     subject:`Project - ${title}`,
                     text:'Project Alloted',
                     html:"<div>Hello Desiger !! A project has been alloted to you</div>"
                   }
                   const mailData = {content, TO:final.email}
                   axios.post(`${process.env.REACT_APP_BACK}/sendMail`,mailData ).then(()=>{}).catch((err)=>{console.log(err)})

                  } catch(err){
                    console.log(err);
                  }
                }}
              >
                Allot
              </button>):(<></>)}
            </div>
          </div>
        </div>
      </div>
     </div>
 );
}

export default Designer;