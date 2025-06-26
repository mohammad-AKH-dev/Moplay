import Link from "next/link";

type PagninationPropsType = {
  title: string;
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
};

const Pagination = ({
  title,
  postsPerPage,
  totalPosts,
  currentPage,
}: PagninationPropsType) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <section className="pagination-section mt-32 sm:mt-16 text-center gap-x-[.7rem]">
      <ul className="join flex-wrap sm:flex-nowrap gap-y-3 gap-x-[.7rem]">
        {pageNumbers.map((number) => (
          <Link
            href={`/${title}/${number}`}
            key={number}
            className={`join-item border-none btn ${
              currentPage === number ? "bg-link" : ""
            }`}
          >
           {number}
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Pagination;
