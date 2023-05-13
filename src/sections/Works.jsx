import { useState } from "react";
import styled from "styled-components";

import {
  ProductDesign,
  WebDesign,
  WebDev,
  Illustration,
  Socials,
} from "../components";

const skills = [
  "Web Design",
  "Web Development",
  "Product Design",
  "Illustration",
  "Social Media",
];

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  position: relative;
  font-size: 50px;
  cursor: pointer;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px #bfbebe;

  ::after {
    content: "${({ text }) => text}";
    position: absolute;
    left: 0;
    top: 0;
    color: #da4ea2;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 1s linear both;

      @keyframes moveText {
        100% {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    color: white;
    -webkit-text-stroke: 0;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");

  const handleClick = (skill) => {
    setWork(skill);
  };

  const renderComponent = () => {
    switch (work) {
      case "Web Design":
        return <WebDesign />;
      case "Web Development":
        return <WebDev />;
      case "Product Design":
        return <ProductDesign />;
      case "Illustration":
        return <Illustration />;
      case "Social Media":
        return <Socials />;
      default:
        return null;
    }
  };

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {skills.map((skill) => (
              <ListItem
                key={skill}
                text={skill}
                onClick={() => handleClick(skill)}
              >
                {skill}
              </ListItem>
            ))}
          </List>
        </Left>

        <Right>{renderComponent()}</Right>
      </Container>
    </Section>
  );
};

export default Works;
