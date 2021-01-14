import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { smallImage } from "../util";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import logo from "../img/logo.svg";
import nintendo from "../img/nintendo.svg";
import xbox from "../img/xbox.svg";

const GameDetail = ({ pathid }) => {
  const history = useHistory();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Nintendo":
        return nintendo;
      case "iOS":
        return apple;
      case "PC":
        return steam;
      default:
        return gamepad;
    }
  };

  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShawow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathid}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathid}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {/* {console.log(game.platforms)} */}
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathid}`}
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
  z-index: 5;
  color: black;
  z-index: 10;
  cursor: default;
  img {
    width: 100%;
    border-radius: 1rem;
    /* border: 1px solid black; */
    margin: 0.1rem auto;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 1);
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
