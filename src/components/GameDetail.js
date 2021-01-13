import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { smallImage } from "../util";

const GameDetail = () => {
  const history = useHistory();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShawow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {console.log(game.platforms)}
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>{smallImage(game.description_raw, 1280)}</Description>
            <div className="gallery">
              {console.log(screen.results)}
              {screen.results.map((screen) => (
                <img key={screen.id} src={screen.image} alt={screen.image} />
              ))}
            </div>
          </Detail>
        </CardShawow>
      )}
    </>
  );
};

const CardShawow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 1rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  line-height: 1.7rem;
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
  font-family: "Montserrat Alternates", sans-serif;
  margin: 1.5rem auto;
`;

export default GameDetail;
