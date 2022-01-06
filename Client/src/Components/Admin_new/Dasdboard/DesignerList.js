    import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { getData } from '../../../firebasefunctions/firestore';
import Navbar3 from '../../Navbar/Navbar3';
const data1 = [
      {
        col1: 'Minsk',
        col2: '27',
        col3: 'rain',
        col4:<button>This is a butt1</button>,
        col5:"this"
      },
      {
        col1: 'Vilnius',
        col2: '30',
        col3: 'rain',
        col4:<button>This is a butt2</button>,
        col5:"this"
      },
      {
        col1: 'London',
        col2: '23',
        col3: 'rain',
        col4:<button>This is a butt3</button>,
        col5:"this"
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
           Header: 'check Profile',
           accessor: 'col5', // accessor is the "key" in the data
         }
        ]
    
function Designer() {
    const [Data, setData] = useState(data1);
    let {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data:Data }, useSortBy);
    const setList =  (id)=>{
        if(id == 1){
            let data = [];
            getData(`Designers`)
            .then((project) => {
                for(let i=0;i<project.length;i+=1){
                    data.push({
                        col1:i+1,
                        col2:project[i].name,
                        col3:project[i].phone,
                        col4:project[i].email,
                        col5:<button
                            onClick={()=>{
                                viewProfile(project[i].email);
                            }}
                        >View</button>
                    })
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
    }


 

 

 return (
     <div>
         <Navbar3/>
     
     <div style={{marginTop:"10vh"}}>
         
         <button
            onClick={()=>{
                setList(1);
            }}
         >Designer List</button>

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
     </div>
 );
}

export default Designer;