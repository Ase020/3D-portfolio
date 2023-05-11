import styled from "styled-components";

const skills = [
  "Frontend Development",
  "Backend Development",
  "Product Design",
  "Illustration",
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
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
  -webkit-text-stroke: 1px #efefef;

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
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {skills.map((skill) => (
              <ListItem key={skill} text={skill}>
                {skill}
              </ListItem>
            ))}
          </List>
        </Left>

        <Right>Right</Right>
      </Container>
    </Section>
  );
};

export default Works;
