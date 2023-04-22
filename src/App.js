import React from "react";
import styled from "styled-components";
import logo from "./logo.png";
import photo from "./photo.jpg";
import code from "./code.jpg";

function App() {
  const onMailHandler = () => {
    window.location.href = "mailto:yunseo4396@naver.com";
  };

  const onNotionHandler = () => {
    window.location.href =
      "https://bow-starfish-ba2.notion.site/593dcc0888ee43278f972b53545356cf";
  };

  const today = new Date();
  const dateString = today.toLocaleDateString();
  return (
    <div style={{ width: "100%" }}>
      <StHeader>
        <StUl>
          <li>주니어</li>
          <li>프론트엔드</li>
          <li>개발자</li>
        </StUl>
        <StUl>
          <StLi onClick={onNotionHandler}>구독하기</StLi>
          <StLi onClick={onMailHandler}>채용하기</StLi>
        </StUl>
      </StHeader>
      <StNav>
        <StImg src={logo} />
        <StNews>뉴스</StNews>
        <StDate>{dateString}</StDate>
      </StNav>
      <StBody>
        <StTitle>
          "div도 몰랐어요"... 비전공자에서 코드 40,000줄을 짜는 리더가 되다.
        </StTitle>
        <StWriter>
          <StPhoto src={photo} />
          <div>남궁윤서 기자</div>
        </StWriter>
        <img src={code} />
        <div>내용</div>
      </StBody>
      <StFooter>footer</StFooter>
    </div>
  );
}

export default App;

const StHeader = styled.div`
  width: 100%;
  height: 2em;
  background-color: #2367d7;
  display: flex;
  justify-content: space-between;
`;

const StUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  margin: auto 0;
  font-size: 12px;
  color: lightgray;
  margin-right: 1.5em;
`;

const StLi = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StNav = styled.div`
  width: 100%;
  height: 7em;
  border-bottom: 2px solid #2367d7;
  display: flex;
  justify-content: space-between;
  line-height: 7em;
`;

const StImg = styled.img`
  width: 160px;
  height: 80px;
  margin: auto 0;
`;

const StNews = styled.div`
  font-size: 40px;
  color: #2367d7;
`;

const StDate = styled.div`
  font-size: 15px;
  margin-top: 2em;
  margin-right: 2em;
`;

const StBody = styled.div`
  width: 80%;
  height: 600px;
  margin: 0 auto;
`;

const StTitle = styled.div`
  font-size: 25px;
  font-weight: 900;
  border-bottom: 2px solid black;
  height: 3em;
  text-align: center;
  margin-top: 2em;
`;

const StWriter = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 0.5em;
`;

const StPhoto = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

const StFooter = styled.div`
  width: 100%;
  height: 4em;
  background-color: black;
`;
