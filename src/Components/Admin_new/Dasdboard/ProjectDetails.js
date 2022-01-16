import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useTable, useSortBy } from 'react-table';
import { getData } from '../../../firebasefunctions/firestore';
import Navbar3 from '../../Navbar/Navbar3';
import { BarWave } from "react-cssfx-loading";
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

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
    const data2 = [
      {
        col1: '',
        col2: '',
        col3: '',
        col4:"",
        col5:<button></button>
      }
    ]

    const columns = [
          {
            Header: 'S.no',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Title',
            accessor: 'col2',
          },
          {
            Header: 'Client Name',
            accessor: 'col3', // accessor is the "key" in the data
          },
          {
           Header: 'Created',
           accessor: 'col4', // accessor is the "key" in the data
         },
         {
           Header: 'Check Details',
           accessor: 'col5', // accessor is the "key" in the data
         }
        ]

        const columns1 = [
            {
              Header: 'S.no',
              accessor: 'col1', // accessor is the "key" in the data
            },
            {
              Header: 'Title',
              accessor: 'col2',
            },
            {
              Header: 'Client',
              accessor: 'col3', // accessor is the "key" in the data
            },
            {
             Header: 'Designer',
             accessor: 'col4', // accessor is the "key" in the data
           },
            {
            Header: 'Created',
            accessor: 'col5', // accessor is the "key" in the data
            },
           {
             Header: 'Check Details',
             accessor: 'col6', // accessor is the "key" in the data
           }
          ]
let c=0;
function ProjectDet() {
    const history = useHistory();
    const [Data, setData] = useState(data1);
    const [Data1, setData1] = useState(data2);
    const [y, set] = useState(0);

    const startLoading = (x)=>{
      if(x){
      var element = document.getElementById('loading');
      if(element){element.style.display = null;}
      var element1 = document.getElementById('screen');
      if(element1){element1.style.opacity = 0.16;}
        } else {
        var element = document.getElementById('loading');
        if(element){element.style.display = "none";}
        var element1 = document.getElementById('screen');
        if(element1){element1.style.opacity = 10;}
      }
  }

    if(Data === data1){
      if(c === 0){toast.info("Loading...", {position:'bottom-center'});c = 1;}
      
      
        //startLoading(true);
        let data = [];
        let data1 = [];
        getData(`Projects`)
            .then((project) => {
                for(let i=0;i<project.length;i+=1){
                    
                    if (project[i].assigned){data.push({
                        col1:i+1,
                        col2:project[i].title,
                        col3:project[i].clientEmail,
                        col4:project[i].designerEmail,
                        col5:project[i]['created'],
                        col6:<button
                            onClick={()=>{
                                viewProfile(project[i]);
                            }}
                        >View</button>
                    })} else {
                        data1.push({
                            col1:i+1,
                            col2:project[i].title,
                            col3:project[i].clientEmail,
                            col4:project[i]['created'],
                            col5:<button
                                onClick={()=>{
                                    viewProfile(project[i]);
                                }}
                            >View</button>
                        })
                    }
                }
                setData(data);
                setData1(data1);
                
                //startLoading(false);
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
      } = useTable({ columns:columns1, data:Data }, useSortBy);

      let {
        getTableProps1,
        getTableBodyProps1,
        headerGroups1,
        rows1,
        prepareRow1,
      } = useTable({ columns:columns, data:Data1 }, useSortBy);
    const setList =  (id)=>{
        if(id == 1){
            let data = [];
            let data1 = [];
            getData(`Projects`)
            .then((project) => {
                console.log(project[0].created);
                for(let i=0;i<project.length;i+=1){
                    if (project[i].assigned){data.push({
                        col1:i+1,
                        col2:project[i].title,
                        col3:project[i].clientEmail,
                        col4:project[i].designerEmail,
                        col5:project[i]['created'].toDate().toString(),
                        col6:<button
                            onClick={()=>{
                                viewProfile(project[i]);
                            }}
                        >View</button>
                    })} else {
                        data1.push({
                          col1:i+1,
                          col2:project[i].title,
                          col3:project[i].clientEmail,
                          col4:project[i]['created'].toDate().toString(),
                            col5:<button
                                onClick={()=>{
                                    viewProfile(project[i]);
                                }}
                            >View</button>
                        })
                    }
                }
                setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
        } 
    }
    const viewProfile = (id)=>{
        console.log("works",id);
        history.push( '/admin/project',
          {title: id.title}
         );
    }

    
 

 

 return (
   <>
     <div id="screen" style={{position:"absolute"}}>
       <div>
     {Data ? (
     <div style={{width:"100vw", textAlign:"center"}}>
         <Navbar3/>
         <h2 style={{textAlign:"center", marginBottom:"40px", marginTop:"15vh"}}>Assigned Projects</h2>
     <div style={{marginTop:"10vh", textAlign:"center", marginLeft:"3vw"}}>
         
         

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
      {/* /// */}

      {/* <table {...getTableProps1()} style={{ border: 'solid 1px black' }}>
         <thead>
         {headerGroups1.map(headerGroup => (
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
         <tbody {...getTableBodyProps1()}>
         {rows1.map(row => {
           prepareRow1(row)
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
       </table> */}

       {/* /// */}
     </div>
     </div>) : <>loading...</>} 
     
     </div></div>

     <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
      <BarWave width="50px" height="50px" color="#1ABAA9"/>
      <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Getting account Info</p>
    </div>

     </>
 );
}

export default ProjectDet;