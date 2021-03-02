import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css"
import requests from "./Requests"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import zIndex from "@material-ui/core/styles/zIndex";


function Banner() {
    const [movie, setMovie] = useState({});
    /* for click movies trailor show* */
    const [trailerUrl, setTrailerUrl ] = useState("")
    useEffect(() => {
        async function fetchMovie() {
            const request = await axios.get(requests.fetchAmazonOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1 )
                ]
      ); // using prettier
      return request;
    }
    fetchMovie();
  }, []);
  console.log(movie);

  const youtubeOpts = {
      height: "390",
      width: "100%",
      playerVars : {
          autoplay: 1,
        }
    };


    function truncate(string,n) {
        return string?.length> n ? string.substr(0,n-1) + "..." : string;                            
    }
    const movieClicked = (moviename) => {
        console.log(moviename);
        if (trailerUrl != "") setTrailerUrl("");
        else {
          movieTrailer(moviename)
            .then((url) => {
              const urlParamV = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParamV.get("v"));
            })
            .catch((err) => console.log(err));
        }
      };

    return(
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPostion: "center center",
            setInterval:10
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button  onClick={() => movieClicked(movie?.title || movie?.name || movie?.original_name)}
                     className="banner_button">Play</button>
                    <button className="banner_button">My list</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>
            {trailerUrl != "" && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
            <div className="banner_fadeBottom" />

        </header>
    )
}

export default Banner;