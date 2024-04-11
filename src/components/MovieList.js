import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';



// displays each film from the movies array and returns each movie's image poster
const MovieList = (props) => {
    // console.logs 6 arrays for each movie with all of their info.
    console.log(props);
    const StarsComponent = props.starsComponent;

    return (
        <>
            {props.movies.map((movies) => (
            // makes images into flex items inside the div 
            <div className='image-container d-flex justify-content-start' key={movies.id}>
                <img src={movies.img} alt="movie"></img>
                <div className='overlay d-flex align-items-center justify-content-center'>
                    <StarsComponent />
                </div>
                <div className='movie-info'>
                    <h3>{movies.title}</h3>
                    <h6>{movies.year}</h6>
                    <p>{movies.info}</p>
                    <br></br>
                    <ReviewForm />
                    {/* <ReviewList /> */}
                </div>
            </div> 
            ))}
        </>
    );
};

export default MovieList;