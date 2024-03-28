import React from 'react';

function Pagination({ pages, currentPage, onPageChange }) {
  if (!pages || pages.length === 0) {
    return null; // or render a message indicating that pagination is not available
  }

  return (
    <div className="d-flex justify-content-end align-items-center">
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
