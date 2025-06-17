import Link from "next/link";

type PagninationPropsType = {
    title: string
    postsPerPage: number
    totalPosts: number
    currentPage: number
}

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
        <ul className="join flex-wrap sm:flex-nowrap gap-x-[.7rem]">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`join-item btn ${currentPage === number ? "bg-link" : ""}`}
            >
              <Link
                href={`/${title}/${number}`}
                className="page-link w-full h-full flex items-center justify-center"
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  };

  export default Pagination