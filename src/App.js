import './styles/app.css';
import TypeBox from './compons/TypeBox';
import React, {useState} from 'react'
import { Row } from './compons/Row';

function App() {
  const [result, setResult] = useState('');
  return (
    <div className='base'>
      <TypeBox>{result}</TypeBox>
      <Row func={setResult} value={result}/>
    </div>
  );
}

export default App;