import styled, { css } from 'styled-components';

const StyledSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledH1 = styled.h1`
  font-size: 8rem;
  font-weight: 100;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const CirclesContainer = styled.div`
  width: 43.7rem;
  height: 43.7rem;
  position: relative;
  animation: rotation 5s linear infinite;
`;

const AnimatedCircles = styled.div`
  width: 43.7rem;
  height: 43.7rem;
  position: relative;
  animation: rotation 5s linear infinite;
`;

const circleStyles = css`
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
`;

const RedCircle = styled.div`
  ${circleStyles};

  background-color: var(--primary-color);
  position: absolute;
  top: 5%;
  left: 0;
  filter: blur(60px);
`;

const BlueCircle = styled.div`
  ${circleStyles};

  background-color: var(--secondary-color);
  position: absolute;
  top: 5%;
  right: 0;
  filter: blur(50px);
`;

const PurpleCircle = styled.div`
  ${circleStyles};

  background-color: var(--tertiary-color);
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(50px);
`;

const Home = () => {
  return (
    <StyledSection>
      <StyledH1>
        welcome
        <br />
        to my <StyledSpan>space.</StyledSpan>
      </StyledH1>

      <CirclesContainer>
        <AnimatedCircles>
          <RedCircle></RedCircle>
          <BlueCircle></BlueCircle>
          <PurpleCircle></PurpleCircle>
        </AnimatedCircles>
      </CirclesContainer>
    </StyledSection>
  );
};

export default Home;
