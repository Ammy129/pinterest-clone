import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PublishIcon from "@material-ui/icons/Publish";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import Save from "./Save";

const PinDetail = () => {
  const { id } = useParams();
  const [pin, setPin] = useState({});
  const history = useHistory();

  useEffect(() => {
    const allPins = JSON.parse(localStorage.getItem("pins"));
    const newPin = allPins.find(pin => pin.id === id);
    setPin(newPin);
  }, [id]);

  return (
    <Wrapper>
      <KeyboardBackspaceIcon
        className="back"
        onClick={() => history.goBack()}
      />
      <DisplayPin>
        <Figure>
          <img src={pin.url} alt="pin-image" />
        </Figure>
        <TextContainer>
          <header>
            <div className="icons">
              <MoreHorizIcon />
              <PublishIcon className="upload" />
            </div>

            <Save />
          </header>
          <Content>
            <h1>{pin.desc}</h1>
            <p>
              Tacos williamsburg retro, VHS gluten-free hexagon freegan try-hard
              typewriter tumblr craft beer chillwave taiyaki austin.
            </p>
            <h4>
              <FavoriteRoundedIcon /> {pin.likes} People like this
            </h4>
          </Content>
          <User>
            <img src={pin.userImage} alt="user-image" />

            <div>
              <h4>{pin.userName}</h4>
              <p>17.2m followers</p>
            </div>
            <button>Follow</button>
          </User>
        </TextContainer>
      </DisplayPin>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 90px 0;
  display: grid;
  place-items: center;
  position: relative;

  .back {
    position: absolute;
    top: 110px;
    left: 35px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 0.5rem;
    border-radius: 50%;
    z-index: 900;
  }
  .back:hover {
    background: #eee;
  }

  @media screen and (max-width: 702px) {
    .back {
      position: absolute;
      top: 80px;
      left: 18px;
    }
  }
`;
const DisplayPin = styled.article`
  width: 1016px;
  border-radius: 2rem;
  display: flex;
  gap: 1.2rem;
  overflow: hidden;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1210px) {
    flex-direction: column;
    width: 508px;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    margin-top: 2.2rem;
    box-shadow: unset;
  }
`;
const Figure = styled.figure`
  flex: 1;
  padding: 1.3rem;

  @media screen and (max-width: 702px) {
    padding: 0.7rem;
  }

  img {
    width: 100%;
    display: block;
    border-radius: 1.4rem;
  }
`;
const TextContainer = styled.div`
  flex: 1;
  position: relative;

  header {
    min-height: 90px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 1rem;

    svg {
      width: 30px;
      height: 30px;
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 509px) {
    header {
      flex-direction: column;
      .icons {
        width: 100%;
        align-self: flex-start;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

const Content = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
  h1 {
    text-transform: capitalize;
    font-size: 2.3rem;

    @media screen and (max-width: 702px) {
      font-size: 1.5rem;
    }
  }
  p {
    color: #777;
    margin-top: 1rem;
    line-height: 1.5;
  }
  h4 {
    color: #333;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    svg {
      color: #e50123;
    }
  }
`;

const User = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 2rem 0;
  padding: 0 1rem;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  button {
    margin-left: auto;
    font-size: 1rem;
    color: #111;
    padding: 1rem;
    border-radius: 2rem;
    background: #efefef;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    background: #ddd;
  }
`;

export default PinDetail;
