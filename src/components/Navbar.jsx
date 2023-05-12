import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 15px 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 10px;
`;

const Logo = styled.img`
  width: 45px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Button = styled.button`
  background: #da4ea2;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Links>
          <Logo src="./logo.png" alt="logo" />

          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>

        <Icons>
          <Icon src="./assets/search.png" alt="search" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Nav>
  );
};

export default Navbar;
