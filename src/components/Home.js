import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import movies from "../moviedata";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

const Home = () => {
  const [
    { recommend, newDisney, original, trending },
    dispatch,
  ] = useStateValue();

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    movies.forEach((movie) => {
      let docType = movie.type;
      if (docType === "recommend") {
        recommends.push(movie);
      } else if (docType === "new") {
        newDisneys.push(movie);
      } else if (docType === "original") {
        originals.push(movie);
      } else if (docType === "trending") {
        trendings.push(movie);
      }
    });
    dispatch({
      type: actionTypes.SET_MOVIES,
      recommend: recommends,
      newDisney: newDisneys,
      original: originals,
      trending: trendings,
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
