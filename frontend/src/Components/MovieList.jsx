import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies }) => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-gray-800 rounded-box m-5">
      {
        movies.map((movie, index) => (
          <div className="carousel-item" key={index}>
            <Movie movie={movie} />
          </div>
        ))
      }
    </div>
  )
}

export default MovieList