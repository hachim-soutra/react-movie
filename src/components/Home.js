import React, { useState, useEffect } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "./../config"

// hooks
import { useHomeFetch } from "./../hooks/useHomeFetch"
import Grid from "./Grid";
import HeroImage from "./HeroImage";
import Thumb from "./Thumb";

const Home = () => {

    const { state, loading, error } = useHomeFetch();

    console.log(state);

    return (
        <>
        { state.results[0] && <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} title={state.results[0].original_title} text={state.results[0].overview} />} 

        <Grid header='Popular Movies'>
            { state.results.map(movie => (
            //   <div key={movie.id} >{movie.title}</div>  
              <Thumb 
                key={movie.id} 
                clickable
                image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : ''} />  
            )) }
        </Grid>
        </>
    )
}

export default Home;