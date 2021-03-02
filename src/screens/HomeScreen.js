import React from 'react';
import "./HomeScreen.css";
import Nav from "../Nav"
import Banner from "../Banner";
import requests from "../Requests"
import Row from "../Row";


function HomeScreen() {
  return (
    <div className="home">
      <Nav />
      <Banner />
      <Row
        isLargeRow
        title="Prime Originals"
        fetchUrl={requests.fetchAmazonOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;