import React from "react";

type showSeasonType = {
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

function SeasonDetails(props: showSeasonType) {
  const {
    poster_path,
    name,
    overview,
    season_number,
    episode_count,
    air_date,
    vote_average,
  } = props;

  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal -top-[230px] sm:-top-[150px] lg:top-0" role="dialog">
        <div
          className="modal-box bg-white dark:bg-base-100  text-center sm:text-left
         -translate-y-[20.5rem] lg:-translate-y-[5.5rem] grid grid-cols-1 gap-y-4 sm:gap-y-0 sm:grid-cols-2 lg:min-w-[800px]"
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            className="max-h-[200px] my-auto lg:max-h-[400px] rounded-xl mx-auto"
          />
          <div className="season-details">
            <h3 className="season-title text-[24px] lg:text-[30px]">
              Title: {name}
            </h3>
            <div className="text-wrapper mt-2 lg:mt-4 line-clamp-[8] max-h-[250px] text-ellipsis">
              <p className="season-overview  text-ellipsis  text-[15px] lg:text-[18px]">
                Overview:{" "}
                {overview?.length
                  ? overview
                  : "There is no preview for this season."}
              </p>
            </div>
            <div className="flex items-center justify-center sm:justify-start text-[14px] lg:text-[16px] mt-3 lg:mt-6 gap-x-12">
              <span className="season-number">Season: {season_number}</span>
              <span className="episode_count">Episodes: {episode_count}</span>
            </div>
            <span className="release-date block mt-2 text-[14px] lg:mt-4 lg:text-[16px]">
              Releease: {air_date}
            </span>
            <span className="imdb-rate block mt-2 text-[14px] lg:mt-4 lg:text-[16px]">
              IMDB: {Math.round(vote_average)}/10
            </span>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
}

export default SeasonDetails;
