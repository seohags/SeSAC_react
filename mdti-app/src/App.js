import styled from 'styled-components';
import {useSelector} from 'react-redux';
import './App.css';
import Button from './components/Button';
import GlobalStyle from './components/GlobalStyle';
import Start from './components/Start';
import Mbti from './components/Mbti';
import Result from './components/Result';



const Main = styled.main`
box-sizing: border-box;
width: 100%;
max-width: 500px;
padding: 0 35px;
margin: auto;
text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey)

  return (
      <>
      <GlobalStyle/>
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1? (
          <Mbti />
        ) : (
          <Result />
        )}
      </Main>
      </>
  );
}

export default App;
