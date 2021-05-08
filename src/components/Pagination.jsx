import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  border: 2px solid var(--grey);
  padding: 1rem;
  border-radius: 5px;
  div {
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
  }
`;

const PaginationLink = styled(Link)`
  padding: 0 1rem;
  border-radius: 5px;
  transform: rotate(-10deg);

  &[aria-current="page"] {
    background-color: var(--black);
    color: var(--yellow);
  }

  &:hover:not([aria-current="page"]) {
    transform: scale(1.3) rotate(10deg);
    background-color: var(--yellow);
    transition: scale rotate 1.3s;
  }

  &[disabled] {
    pointer-events: none;
    color: var(--grey);
  }

  @media (max-width: 800px) {
    .word {
      display: none !important;
    }
    font-size: 1.4rem;
  }
`;

const Pagination = ({ pageSize, totalCount, currentPage, base }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <PaginationWrapper>
      <PaginationLink
        title="Prev Page"
        disabled={!hasPrevPage}
        to={`${base}/${prevPage}/`}
      >
        ◀︎ <span className="word">Prev</span>
      </PaginationLink>
      <div>
        {Array.from({ length: totalPages }).map((_, i) => (
          <PaginationLink to={`${base}${i > 0 ? `/${i + 1}` : ""}/`} key={i}>
            {i + 1}
          </PaginationLink>
        ))}
      </div>
      <PaginationLink
        title="Next Page"
        disabled={!hasNextPage}
        to={`${base}/${nextPage}/`}
      >
        <span className="word">Next</span> ▶︎
      </PaginationLink>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  pageSiz: PropTypes.number,
  totalCoun: PropTypes.number,
  currentPag: PropTypes.number,
  bas: PropTypes.number,
};

export default Pagination;
