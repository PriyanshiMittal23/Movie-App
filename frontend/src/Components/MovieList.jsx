import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies }) => {
  return (
    <div >
      <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-gray-800 rounded-box m-5">
      {movies.map((movie, index) => (
        <div
          className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          key={index}
        >
          <Movie movie={movie} />
        </div>
      ))}
    </div>

    </div>
  )
}

export default MovieList