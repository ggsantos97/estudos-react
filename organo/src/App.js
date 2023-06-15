import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'GUSTAVO GOMES',
      cargo: 'Full Stack Developer',
      imagem: 'https://github.com/ggsantos97.png',
      github: 'https://github.com/ggsantos97',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'RUBENS DIEGO',
      cargo: 'Full Stack Developer',
      imagem: 'https://github.com/Hazarinn.png',
      github: 'https://github.com/Hazarinn',
      time: times[0].nome
    },
    
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <>
                <Banner />
                <Formulario 
                  aoCriarTime={cadastrarTime} 
                  times={times.map(time => time.nome)} 
                  aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
                />
                <section className="times">
                  <h1>Minha organização</h1>
                  {times.map((time, indice) => 
                  <Time 
                    mudarCor={mudarCor} 
                    key={indice}
                    time={time} 
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
                    aoDeletar={deletarColaborador} />)}
                </section>
                <Rodape />
            </>
        }/>
        <Route path="login" element={<div>Página de login em construção</div>}/>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;