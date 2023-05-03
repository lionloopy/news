import React from "react";
import styled from "styled-components";
import photo from "./photo.jpg";
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
        <StWriter>
          <StPhoto src={photo} />
          <div>남궁윤서 기자</div>
        </StWriter>
        <StSection>
          <StMainImg src={code} />
          <StContent>
            프론트엔드 개발자를 꿈꾸는 남궁윤서 수료생은 인터뷰에서 "처음엔
            div가 무엇인지도 몰랐다. 꾸준한 성실함과 노력이 나를 여기까지 오게
            만들었다."라고 말했습니다.
            <StContents>
              <StQ>처음에 어떻게 개발을 접하게 되었나요?</StQ>
              <StA>
                코로나로 꿈을 잃고, 진로에 대해 고민하던 중 진로에 대한 폭을
                넓히고 더 가까이서 접할 수 없을까 라는 생각에 교육업계에
                사무직으로 취직을 하게 되었습니다.
                <br /> 전 회사의 교육 관련 과목 중 웹퍼블리셔 양성 과정이
                있었고, 회사의 지원으로 무료로 수업을 듣게 되며 개발을 접하게
                되었습니다.
              </StA>
              <StQ>비전공자인데 코딩의 첫인상이 어떠셨나요?</StQ>
              <StA>
                일단 너무너무 재밌었습니다. 내가 짜는 코드로 웹페이지를 바꿀 수
                있고, 내가 만든 버튼을 유저가 클릭하면 기능이 작동한 다는 것이
                너무 신기했습니다.
                <br /> 그렇게 처음부터 저는 코딩의 세계에 푹 빠져버렸습니다.
              </StA>
              <StQ>그렇다면 왜 프론트엔드 개발을 선택하셨나요?</StQ>
              <StA>
                앞서 말씀드렸다시피, 저는 제가 만든 코드가 바로바로 눈에 보이는
                것이 재밌었습니다.
                <br /> 더 나아가, 내가 이러한 기능을 만들어 유저가 사용하게
                된다면? 나의 코드로 사람들의 삶에 더 편리함을 줄 수 있다면?
                이라는 생각을 가지게 되었고,
                <br /> 그 생각이 프론트엔드 개발자의 꿈으로 저를 닿게 해
                주었습니다.
              </StA>
              <StQ>개발을 배우면서 힘든적은 없었나요?</StQ>
              <StA>
                처음엔 맨땅에 헤딩을 하며 막막했을 때도 있었습니다. 하지만
                코딩이 너무 재밌었고, 빠른 습득력으로 하나하나 놓치지 않고 모두
                제것으로 만들려고 노력했습니다.
                <br /> 그렇게 부트캠프 진행 중 제로베이스에서 과제 제출을
                1등으로 하는 사람이 되었고, div도 모르던 제가 코드를 40,000줄을
                짜는 프론트엔드 리더가 되어 있었습니다.
              </StA>
              <StQ>앞으로의 계획이 있다면?</StQ>
              <StA>
                저는 앞으로 성실한 개발자가 되는 것이 꿈입니다. 성실함은 항상
                결과물로 나타나더라고요?(웃음)
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
  line-height: 7em;
`;

const StNews = styled.div`
  font-size: 70px;
  color: #2e3840;
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
`;

const StSlide = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin-right: 1em;
  margin-left: 1em;
  cursor: pointer;
  display: flex;
`;

const StNotice = styled.div`
  color: red;
  margin-right: 10px;
  font-weight: 900;
`;

const StBody = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 4em;
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

const StSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const StMainImg = styled.img`
  width: 60%;
  margin: 0 auto;
`;

const StContent = styled.div`
  margin-top: 2em;
`;

const StContents = styled.div`
  margin-top: 10px;
`;

const StQ = styled.div`
  font-size: 15px;
  font-weight: 800;
`;

const StA = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
`;

const StFooter = styled.div`
  width: 100%;
  height: 4em;
  background-color: black;
`;
