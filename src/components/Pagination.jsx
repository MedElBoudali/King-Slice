import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

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
    a {
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
    }
  }
  a[disabled] {
    pointer-events: none;
    color: var(--grey);
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
      <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
        ◀︎ Prev
      </Link>
      <div>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link to={`${base}${i > 0 ? `/${i + 1}` : ""}`}>{i + 1}</Link>
        ))}
      </div>
      <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
        Next ▶︎
      </Link>
    </PaginationWrapper>
  );
};

export default Pagination;
