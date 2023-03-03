
import React ,{useState}from "react";
import { Container, Screen,Prev,Curr,Button,Nos } from "../style/cal";

function Calculator() {
  const [current,currentState]=useState('')

  const [previous,SetprevState]=useState('') 
  const [operations,setop]=useState('')


  const appendValueHandler=(element)=>{
    const value=element.target.getAttribute('data');
    if(value==='.' && current.includes('.'))return;
    
currentState(current+value); 

  }
const delhendler=()=>{
  currentState(String(current).slice(0,-1));
}
const allclearHendler=()=>{
  currentState("");
  setop("");
  SetprevState("");
}
const choosehandler=(element)=>{
if(current==="")return;
if(previous!==""){
  let value=compute();
  SetprevState(value);
}else{
  SetprevState(current);
}
currentState("");
setop(element.target.getAttribute("data"));
}
const equalhabdler=()=>{
  let value=compute();
  if(value===undefined || value==null)return;
  currentState(value);
  SetprevState('');
  setop('');
}
const checker=()=>{
  if((String(current).length==21)){
  return;
  }
}
const compute=()=>{
  let result;
  let prev=parseFloat(previous);
  let currn=parseFloat(current);
  if(isNaN(prev)|| isNaN(currn))return;
  switch(operations){
    case '%':
      result=prev/currn;
      break;
      case 'X':
        result=prev*currn;
        break;
        case '+':
          result=prev+currn;
          break;
          case '-':
            result=prev-currn;
            break;
            default:
            break;
  }
  return result;


};
  return (
    <>
      <Container>
        <Screen>
            <Prev>{previous} {current}</Prev>
          {/* <h1>this is Screen </h1> */}
          <Curr>{current}</Curr>
        </Screen>
        <Nos>

        <Button bl onClick={allclearHendler}>AC</Button>
        <Button del onClick={delhendler}>DEL</Button>
        <Button data={'%'}operation onClick={choosehandler}>%</Button>
        <Button data={7} onClick={appendValueHandler}>7</Button>
        <Button  data={8} onClick={appendValueHandler}>8</Button>
        <Button data={9}    onClick={appendValueHandler}>9</Button>
        
        <Button data={'X'} operation onClick={choosehandler}>X</Button>
        <Button data={4}onClick={appendValueHandler}>4</Button>
        <Button data={5}onClick={appendValueHandler}>5</Button>
        
        <Button data={6}onClick={appendValueHandler}>6</Button>
        <Button data={'+'} operation onClick={choosehandler}>+</Button>
        <Button data={1}onClick={appendValueHandler}>1</Button>
        <Button data={2}onClick={appendValueHandler}>2</Button>
        <Button data={3}onClick={appendValueHandler}>3</Button>
        <Button data={'-'}operation onClick={choosehandler}>-</Button>
        <Button data={'.'}onClick={appendValueHandler}decimal>.</Button>
        <Button data={0}onClick={appendValueHandler}>0</Button>
        <Button fast onClick={equalhabdler}>=</Button>
        </Nos>
      </Container>
    </>
  );
}

export default Calculator;
