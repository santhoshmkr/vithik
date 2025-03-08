import React from "react";

const Pagination=({currentPage,totalPage,onPageChange})=>{
  const handlePageChange=(page)=>{
      if(page>=1 && page<=totalPage && page!==currentPage){
        onPageChange(page);
      }
  }
  return(
    <>
    <button
    onClick={()=>handlePageChange(currentPage-1)} 
    disabled={currentPage===1}>
    previous
    </button>

    {[...Array(totalPage)].map((_,index)=>{
      const pageNumber=index+1;
      return(
        <button
        key={pageNumber}
        onClick={()=>handlePageChange(pageNumber)}
        className={currentPage===pageNumber?'active':''}>{pageNumber}</button>
      )
    })}

    <button
    onClick={()=>{handlePageChange(currentPage+1)}}
    disabled={currentPage===totalPage}>Next</button>\
    <h1 className="text-2xl">hello virthik</h1>
    </>
  )
}
export default Pagination