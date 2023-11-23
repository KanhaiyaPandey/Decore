/* eslint-disable no-unused-vars */

import React from 'react'
import { useLoaderData , useLocation, useNavigate} from 'react-router-dom'

const PaginationContainer = () => {
  const {meta} = useLoaderData();
  const {pageCount, page} = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className='flex mt-16 justify-end'>
      <div className="join">

  <button className="join-item btn"
    onClick={() => {
      let prevPage = page - 1;
      if (prevPage < 1) prevPage = pageCount;
      handlePageChange(prevPage);
    }}
    >«</button>
   
   <button className="join-item btn">page {page}</button>

  <button className="join-item btn"
    onClick={() => {
      let nextPage = page + 1;
      if (nextPage > pageCount) nextPage = 1;
      handlePageChange(nextPage);
    }}
    >»</button>
</div>
    </div>
  )
}

export default PaginationContainer