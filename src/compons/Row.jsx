import React from 'react'
import IntButton from './UI/IntButton'
import '../styles/app.css';

/* eslint no-eval: 0 */

export const Row = ({func, value}) => {
  return (
    <div className='panel'>
      <div className="row">
        <IntButton onClick={ () => func(value+'1')}>1</IntButton>
        <IntButton onClick={ () => func(value+'2')}>2</IntButton>
        <IntButton onClick={ () => func(value+'3')}>3</IntButton>
        <IntButton onClick={ () => func(value+'+')}>+</IntButton>
      </div>
      <div className="row">
        <IntButton onClick={ () => func(value+'4')}>4</IntButton>
        <IntButton onClick={ () => func(value+'5')}>5</IntButton>
        <IntButton onClick={ () => func(value+'6')}>6</IntButton>
        <IntButton onClick={ () => func(value+'-')}>-</IntButton>
      </div>
      <div className="row">
        <IntButton onClick={ () => func(value+'7')}>7</IntButton>
        <IntButton onClick={ () => func(value+'8')}>8</IntButton>
        <IntButton onClick={ () => func(value+'9')}>9</IntButton>
        <IntButton onClick={ () => func(value+'*')}>*</IntButton>
      </div>
      <div className="row">
        <IntButton onClick={ () => func(value+'0')}>0</IntButton>
        <IntButton onClick={ () => func(value+'.')}>.</IntButton>
        <IntButton onClick={ () => func(value+'/')}>/</IntButton>
        <IntButton onClick={ () => func('')}>CL</IntButton>
      </div>
      <IntButton onClick={() => func(eval(value))}>RES</IntButton>
    </div>
  )
}
