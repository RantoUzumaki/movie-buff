import React, { useEffect } from "react";
import MovieApi from "./../common/MovieApi";
import { API } from "./../common/api";

const HomePage = () => {
  useEffect(() => {
    MovieApi.get(`?apiKey=${API}&s=harry&type=movie`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }, []);

  return <div>Homepage</div>;
};

export default HomePage;
