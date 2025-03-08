// import { useState,useEffect } from 'react'
// import Pagination from './Pagination';
// import data from './assets/userData.json'
import './App.css'

function App() {
   const itemsPerPage=5;
   const totalPage=Math.ceil(data.length/itemsPerPage);

   const[currentPage,setcurrentPage]=useState(1);
   const[currentData,setcurrentData]=useState([]);

   const handlePageChange=(page)=>{
     setcurrentPage(page);
   }

   useEffect(()=>{
    const indexofFirstItem=(currentPage-1)*itemsPerPage;
    const indexofLastItem=indexofFirstItem+itemsPerPage;

    setcurrentData(data.slice(indexofFirstItem,indexofLastItem));
   },[currentPage])

  return (
    // <>
    //   <div className='pagination'>
    //     <table>
    //       <thead>
    //         <tr>
    //           <td>Number</td>
    //           <td>Name</td>
    //           <td>Gender</td>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {currentData.map((items)=>(
    //           <tr key={items.number}>
    //             <td>{items.name}</td>
    //             <td>{items.gender}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //     <Pagination
    //       currentPage={currentPage}
    //       totalPage={totalPage}
    //       onPageChange={handlePageChange}/>

    //   </div>
      
    // </>
    <div className="">
      <h1 className='text-red-500'>hello</h1>
    </div>
  )
}

export default App
