import React from "react";
import styled from "styled-components";
import code from "./code.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "../node_modules/swiper/swiper.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function App() {
  const onMailHandler = () => {
    window.location.href = "mailto:yunseo4396@naver.com";
  };

  const onNotionHandler = () => {
    window.location.href =
      "https://bow-starfish-ba2.notion.site/593dcc0888ee43278f972b53545356cf";
  };

  const onGitHandler = () => {
    window.location.href = "https://github.com/lionloopy";
  };

  const today = new Date();
  const dateString = today.toLocaleDateString();

  return (
    <StWrap>
      <StHeader>
        <StUl>
          <StLi onClick={onNotionHandler}>구독하기</StLi>
          <StLi onClick={onMailHandler}>채용하기</StLi>
        </StUl>
      </StHeader>
      <StNav>
        <StNews>THE FRONTEND NEWS</StNews>
      </StNav>
      <StLine>
        <StDate onClick={onGitHandler}>www.github.com</StDate>
        <StSlide>
          <StNotice>속보</StNotice>
          <Swiper
            className="banner"
            spaceBetween={50}
            slidesPerView={1}
            observer={true}
            observeParents={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            direction="vertical"
          >
            <SwiperSlide>남궁윤서 "코딩이 제일 재밌었다" 발언</SwiperSlide>
            <SwiperSlide>떠오르는 프론트엔드 개발자 과연 누구?</SwiperSlide>
            <SwiperSlide>남궁윤서 부트캠프에서도 높은 평가 받아...</SwiperSlide>
          </Swiper>
        </StSlide>
        <StDate>{dateString}</StDate>
      </StLine>

      <StBody>
        <StTitle>
          "div도 몰랐어요"... 비전공자에서 코드 40,000줄을 짜는 리더가 되다.
        </StTitle>
        <StSection>
          <StBox>
            <StMainImg src={code} />
          </StBox>
          <StContent>
            <StContents>
              <StQ>[ 간단한 소개부터 부탁드립니다 ]</StQ>
              <StA>
                안녕하세요. <br />
                먼저 이렇게 인터뷰를 요청해주셔서 감사합니다. 저는 현재
                프론트엔드 개발자를 꿈꾸는 남궁윤서입니다.
                <br />
                일단 해보자! 라는 마인드로 개발을 배우다 보니 빠른 습득력이란
                타이틀을 가지게 된 것 같습니다.
              </StA>
              <StQ>
                [ 개발자가 되기로 한 이유에 대해 말씀해주실 수 있을까요? ]
              </StQ>
              <StA>
                어느 날 카페에서 해커처럼 노트북으로 무언가 작업하는 사람을 보게
                되었습니다.
                <br /> 알 수 없는 영어들이 가득한데, 그 영어 몇 글자를 고치면
                화면이 바뀌는 것을 보았습니다.
                <br /> 저도 만들기를 좋아하고, 그게 누군가에게 도움이 되는 것에
                행복을 느끼는 사람으로서 '컴퓨터로 나도 무언가 만들어볼 수
                있겠구나!' 라는 생각을 가지게 되었습니다.
                <br />
                그렇게 개발자라는 꿈에 더 다가가기 위해 교육업계에 사무직으로
                취직하여 가장 가까이서 개발이라는 것을 접해보게 되었습니다. 막상
                접해보니 너무 재밌어서 그 때부터 개발자가 되기로 결심했습니다.
              </StA>
              <StQ>
                [ 개발자로서 본인의 강점과 근거가 되는 경험을 말씀해주실 수
                있을까요? ]
              </StQ>
              <StA>
                제가 생각하는 개발자로서 제 강점은 습득력이 엄청나게 빠르다는
                것과 그것을 내 것으로 만드는 것에 재미를 느낀다는 것 입니다.
                <br /> 부트캠프 과정을 진행했을 당시 저는 비전공자로
                들어갔습니다. 하지만 엄청나게 빠른 습득력으로 중간과제를 1등으로
                제출하는 놀라운 성장력을 보였습니다.
                <br /> 또한 습득력뿐만 아니라 손도 빨라서 기한 내에 제출하지
                못했던 적이 없습니다. '즐기는 사람은 이길 수 없다'는 말은 아마
                저를 뜻하는 것 같습니다.
              </StA>
              <StQ>[ 혹시 인생에서 힘들었지만 극복한 경험이 있으신가요? ]</StQ>
              <StA>
                예전 스페인으로 교환학생을 간 적이 있었습니다. 하지만 제
                전공과목은 영어로 지원이 안 되어 스페인어로 밖에 들을 수 없었고
                제 서투른 스페인어로는 수업을 따라잡기가 너무 어려웠습니다.
                <br /> 그래서 매 수업이 끝나고 교수님들을 찾아가 질문했던 기억이
                있습니다. 그 당시엔 너무 힘들었지만, 교수님들께서 그런 제 모습을
                좋게 봐주시고 주말에 따로 영어로 개인과외를 해주셨던 기억도
                있습니다.
                <br />
                너무 힘들었지만 극복하고 학점까지 받은 저 자신이 너무 뿌듯했던
                경험이 있습니다.
              </StA>
              <StQ>[ 앞으로 어떤 개발자가 되고 싶은가요? ]</StQ>
              <StA>
                저는 앞으로 성실한 개발자가 되는 것이 꿈입니다. 성실함은 항상
                결과물로 나타나는 것 같습니다.
                <br /> 또한 즐기는 자를 이길 수는 없다고 생각합니다. 코딩이
                즐겁고, 매 순간 성실한 모습으로 성장하는 그런 개발자가 되고
                싶습니다.
              </StA>
            </StContents>
          </StContent>
        </StSection>
      </StBody>
      <StFooter>footer</StFooter>
    </StWrap>
  );
}

export default App;

const StWrap = styled.div`
  width: 100%;
  background-color: #fff;
`;

const StHeader = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 2em;
  height: 2em;
  background-color: rgb(237, 43, 42);
  display: flex;
  justify-content: space-between;
`;

const StUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  list-style: none;
  gap: 10px;
  margin: auto 0;
  font-size: 12px;
  color: #fff;
  margin-right: 1.5em;
`;

const StLi = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StNav = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 8.5em;
  display: flex;
  justify-content: space-between;
  line-height: 8.5em;
`;

const StNews = styled.div`
  font-size: 85px;
  color: #2e3840;
  font-family: "Lora", serif;
`;

const StLine = styled.div`
  width: 90%;
  margin: 0 auto;
  border: 2px solid #f15a59;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 3em;
`;

const StDate = styled.div`
  font-size: 18px;
  margin-right: 1em;
  margin-left: 1em;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
`;

const StSlide = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin-right: 1em;
  margin-left: 1em;
  cursor: pointer;
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
`;

const StNotice = styled.div`
  color: red;
  margin-right: 10px;
  font-weight: 900;
`;

const StBody = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 4em;
`;

const StTitle = styled.div`
  font-size: 43px;
  margin-top: 0.8em;
  margin-bottom: 0.8em;
  color: #2e3840;
  font-family: "Hahmlet", serif;
  text-align: justify;
  word-spacing: 2px;
  letter-spacing: 1px;
`;

const StSection = styled.div`
  width: 100%;
  display: flex;
  gap: 2%;
`;

const StMainImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const StBox = styled.div`
  width: 45%;
`;

const StContent = styled.div`
  width: 55%;
`;

const StContents = styled.div`
  margin-top: 10px;
`;

const StQ = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
`;

const StA = styled.div`
  font-size: 17px;
  margin-bottom: 15px;
  font-family: "Noto Sans KR", sans-serif;
`;

const StFooter = styled.div`
  width: 100%;
  height: 4em;
  background-color: black;
`;
