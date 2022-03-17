import React from "react";
import styled from "styled-components";

const CatContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

function renderCatUrl(props) {
  return props.imageUrl;
}

const CatCard = styled.section`
  width: 100%;
  height: 25vh;
  background-image: url(${renderCatUrl});
  background-size: cover;
  background-position: center center;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 25%;
  }
`;

const CatImage = styled.img`
  display: hidden;
  width: 1px;
  height: 1px;
`;

const CatList = ({ catPics }) => {
  const renderCats = catPics.map((cat, index) => {
    return (
      <CatCard key={index} imageUrl={cat.url}>
        <CatImage src={cat.url} alt="cat" />
      </CatCard>
    );
  });

  return <CatContainer>{renderCats}</CatContainer>;
};

export default CatList;
