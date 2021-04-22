import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
  div {
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    a {
      padding: 0 1.2px;
      &[aria-current="page"] {
        background-color: var(--yellow);
      }
    }
  }
`;

const Pagination = ({ pageSize, totalCount, currentPage, skip, base }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <PaginationWrapper>
      <Link displabled={!hasPrevPage} to={`${base}/${prevPage}`}>
        ◀︎ Previous
      </Link>
      <div>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link to={`${base}/${i + 1}`}>{i + 1}</Link>
        ))}
      </div>
      <Link displabled={!hasNextPage} to={`${base}/${nextPage}`}>
        Next ►
      </Link>
    </PaginationWrapper>
  );
};

export default Pagination;
