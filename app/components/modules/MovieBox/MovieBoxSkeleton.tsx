import React from 'react'

function MovieBoxSkeleton() {
  return (
    <div className="movie-box group relative max-w-[255px] max-h-[334px] sm:max-h-full sm:w-full sm:h-full">
    <div className="movie-img__wrapper skeleton overflow-hidden relative rounded-2xl">
      {/* Invisible but loadable image */}
      {/* Skeleton Box */}
      <div className="rounded-2xl max-h-[300px] min-h-[300px] skeleton"></div>
    </div>
    <div className="movie-detailes overflow-hidden mt-4">
      <h4 className="movie-title w-[220px] h-[27px] text-[18px] font-bold skeleton text-ellipsis overflow-hidden tracking-widest whitespace-nowrap"></h4>
      <div className="movie-time flex flex-wrap gap-x-2 flex-col sm:flex-row justify-between mt-2 text-[16px]">
        <span className="skeleton w-[80px] h-[24px]"></span>
        <span className="skeleton w-[80px] h-[24px]"></span>
      </div>
    </div>
  </div>
  )
}

export default MovieBoxSkeleton
