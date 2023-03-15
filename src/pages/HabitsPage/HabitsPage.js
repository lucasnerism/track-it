import axios from "axios";
import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BASE_URL } from "../../constants/url";
import { UserContext } from "../../UserContext";
import CreateHabit from "./CreateHabit";
import Habits from "./Habits";


export default function HabitsPage() {
  const [habits, setHabits] = React.useState([]);
  const [create, setCreate] = React.useState(false);
  const [reload, setReload] = React.useState([]);
  const { token } = React.useContext(UserContext);

  React.useEffect(() => {
    const url = `${BASE_URL}/habits`;
    const config = {
      headers: {
        "Authorization": token
      }
    };
    axios.get(url, config)
      .then(resp => setHabits(resp.data))
      .catch(err => console.log(err.response));
  }, [reload]);

  return (
    <>
      <Header />
      <Container>
        <MeusHabitos>
          <h1>Meus hábitos</h1>
          <button>+</button>
        </MeusHabitos>
        {create && <CreateHabit />}
        {habits.length !== 0 ? habits.map(<Habits />) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 375px;
  padding: 70px 17px;
  p{
    font-size: 18px;
    color: #666666;
  }
`;

const MeusHabitos = styled.div`
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;
  color: #126BA5;
  button{
    width: 40px;
    height: 35px;
    background-color:#52B6FF;
    color: #FFFFFF;
    border-radius: 4.7px;
    border: none;
    font-size: 32px;
    text-align: center;
  }
`;

const Habitos = styled.div`

`;