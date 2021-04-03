import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Save from "./Save";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PublishIcon from "@material-ui/icons/Publish";

const SinglePin = ({ url, id }) => {
  return (
    <Wrapper>
      <Link to={`/pin/${id}`}>
        <Figure>
          <HoverState>
            <Save />
            <div className="icons">
              <PublishIcon />
              <MoreHorizIcon />
            </div>
          </HoverState>
          <img src={url} alt="img" />
        </Figure>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding-bottom: 32px;

  @media screen and (max-width: 836px) {
    padding-bottom: 18px;
  }
`;

const Figure = styled.figure`
  width: 236px;
  cursor: zoom-in;
  margin: 0 auto;
  position: relative;

  :hover article {
    display: flex;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    display: block;
  }

  @media screen and (max-width: 836px) {
    width: 166px;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    min-width: 130px;
    column-gap: 0px;

    :hover article {
      display: none;
    }

    img {
      border-radius: 14px;
    }
  }
`;

const HoverState = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  display: none;

  .icons {
    align-self: flex-end;
  }

  .icons svg {
    color: #111;
    width: 35px;
    height: 35px;
    padding: 0.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    margin-left: 0.5rem;
  }
`;

export default SinglePin;
