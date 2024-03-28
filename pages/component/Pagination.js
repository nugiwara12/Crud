import React from 'react';

function Pagination({ userCount, currentPage, pageSize, onPageChange }) {
	const totalPages = Math.ceil(userCount / pageSize);

	if (totalPages <= 1) return null;

	const pages = Array.from({ length: totalPages }, (_, i) => i+1);

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
