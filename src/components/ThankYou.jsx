import React from "react";
import styled from "styled-components";
import "../assets/fotor.png";
import "../style/thankyou.css"


const StyledThankYou = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
  h2 {
    font-size: 36px;
    margin-bottom: 20px;
    font-family: 'Alegreya Sans', sans-serif;
    color: #ba5f5f;
  }

  p {
    font-size: 27px;
    font-family: "Alegreya Sans", sans-serif;
    font-weight: 400;
    color: rgb(255 255 255);
    mix-blend-mode: overlay;
    text-shadow: 1px 3px 1px black;
  }
`;

const ThankYou = () => {
  return (
    <StyledThankYou className="fotor">
      <h2>Thankyou for shopping 😍</h2>
      <h2>ਖਰੀਦਦਾਰੀ ਲਈ ਤੁਹਾਡਾ ਧੰਨਵਾਦ 😍</h2>
      <p>We appreciate your loyalty with us and hope to see you again soon!</p>
      <p>
        ਅਸੀਂ ਸਾਡੇ ਨਾਲ ਤੁਹਾਡੀ ਵਫ਼ਾਦਾਰੀ ਦੀ ਕਦਰ ਕਰਦੇ ਹਾਂ ਅਤੇ ਜਲਦੀ ਹੀ ਤੁਹਾਨੂੰ ਦੁਬਾਰਾ
        ਮਿਲਣ ਦੀ ਉਮੀਦ ਕਰਦੇ ਹਾਂ!
      </p>
    </StyledThankYou>
  );
};

export default ThankYou;
