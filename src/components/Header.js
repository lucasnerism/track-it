import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../UserContext";


export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Link to="/"><h1>TrackIt</h1></Link>
      <img src={user.image} alt="perfil" />
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: #126BA5;
  h1{
    font-family: 'Playball';
    font-weight: 400;
    font-size: 39px;
    color: #FFFFFF;
  }
  img{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;