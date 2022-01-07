import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useTable, useSortBy } from 'react-table';
import { getData } from '../../../firebasefunctions/firestore';
import Navbar3 from '../../Navbar/Navbar3';
import { BarWave } from "react-cssfx-loading";
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


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

let c=0;
function Unassigned() {
    const history = useHistory();
    const [Data, setData] = useState(data2);
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

    if(Data === data2){
      if(c === 0){toast.info("Loading...", {position:'bottom-center'});c = 1;}
      
      
        //startLoading(true);
        let data = [];
        getData(`Projects`)
            .then((project) => {
                for(let i=0;i<project.length;i+=1){
                    let k=0;
                    if (project[i].assigned){} else {
                        k+=1
                        data.push({
                            col1:k,
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
      } = useTable({ columns:columns, data:Data }, useSortBy);

    const setList =  (id)=>{
        if(id == 1){
            let data = [];
            let data1 = [];
            getData(`Projects`)
            .then((project) => {
                console.log(project[0].created);
                let k=0;
                for(let i=0;i<project.length;i+=1){
                    if (project[i].assigned){} else {
                        k+=1;
                        data.push({
                          col1:k,
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
        history.push({ 
          pathname: '/admin/project',
          state: id
         });
    }

    
 

 

 return (
   <>
     <div id="screen" style={{position:"absolute"}}>
       <div>
     {Data ? (
     <div>
         <Navbar3/>
     
     <div style={{marginTop:"10vh"}}>
         
         <button
            onClick={()=>{
                setList(1);
            }}
         >Assigned List</button>

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
     </div>) : <>loading...</>} 
     
     </div></div>

     <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
      <BarWave width="50px" height="50px" color="#1ABAA9"/>
      <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Getting account Info</p>
    </div>

     </>
 );
}

export default Unassigned;