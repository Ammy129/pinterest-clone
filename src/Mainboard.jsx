import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SinglePin from "./components/SinglePin";

const Mainboard = ({ search }) => {
  const [url, setUrl] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const fetchPics = async () => {
    setShowLoading(true);

    const res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=ZQrd_Xez9g67zoaEm_soarPLjIEFybH44C7CdwPQRcg&&page=1&&per_page=50&content_filter=high&query=${search}`
    );

    const resJSON = await res.json();
    const results = await resJSON.results;
    const urls = results.map(result => ({
      id: result.id,
      url: result.urls.regular,
      userImage: result.user.profile_image.medium,
      userName: result.user.username,
      likes: result.likes,
      desc: result.alt_description,
      height: result.height,
    }));
    setUrl(urls);
    setShowLoading(false);
    localStorage.setItem("pins", JSON.stringify(urls));
  };

  useEffect(() => {
    fetchPics();
  }, [search]);

  if (showLoading) {
    return (
      <LoadingOverlay>
        We are adding new Ideas <br /> to your feed
        <Loading />
      </LoadingOverlay>
    );
  }

  return (
    <Wrapper>
      {url.map(url => (
        <SinglePin key={url.id} id={url.id} url={url.url} />
      ))}
    </Wrapper>
  );
};

const LoadingOverlay = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-top: 90px;
  font-weight: bold;
  font-size: 2.3rem;
  text-align: center;
  color: #111;
  text-transform: capitalize;
  line-height: 1.5;

  @media screen and (max-width: 836px) {
    font-size: 1.8rem;
  }
`;
const Loading = styled.div`
  margin-top: 2rem;
  width: 40px;
  height: 40px;
  border: 6px solid #e50124;
  border-right: 6px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s ease-out infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(50deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Wrapper = styled.section`
  width: 1500px;
  margin: 90px auto;
  column-count: 6;
  column-gap: 0px;
  @media screen and (max-width: 1511px) {
    width: 1280px;
    column-count: 5;
  }

  @media screen and (max-width: 1350px) {
    column-count: 4;
    width: 1040px;
  }

  @media screen and (max-width: 1089px) {
    column-count: 3;
    width: 760px;
  }

  @media screen and (max-width: 836px) {
    width: 540px;
  }

  @media screen and (max-width: 540px) {
    column-count: 2;
    width: 95%;
    column-gap: 5px;
  }
`;

export default Mainboard;
