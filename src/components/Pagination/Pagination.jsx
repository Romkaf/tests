import React from 'react';
import { createPages } from './createPages';

const Pagination = ({ totalPages, currentPage, onCurrentPageSet }) => {
	const pages = [];
	createPages(pages, totalPages, currentPage);

	const handlePageClick = (page) => () => onCurrentPageSet(page);

	return (
		<nav aria-label="Test pages" className="ml-2">
			<ul className="pagination">
				{pages.map((it) => (
					<li
						className={`page-item ${currentPage == it ? 'active' : ''}`}
						key={it}
						onClick={handlePageClick(it)}
					>
						<button className="page-link" href="#">
							{it}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
