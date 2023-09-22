
import { TextField } from '@mui/material';
import './App.css';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';




function App() {
  const validateInput = (e) =>{
    const {value,name} = e.target
    if(!!value.match(/^[0-9]+$/)){ 
      if(name==="principle"){
        setPrincipal(value)
      setisprinciplevalid(true)
      }                       //regular Expression
      
    
    else if(name==="rate"){
      setRate(value)
      setisRatevalid(true)
    }
    else{
      setYear(value)
      setisyearvalid(true)
    }
  
  }
  else{
    if(name==="principle"){
      setPrincipal(value)
      setisprinciplevalid(false)
    }else if(name==="rate"){
      setRate(value)
      setisRatevalid(false)

    }else{
      setYear(value)
      setisyearvalid(false)
    }
  }
}
  const [isRatevalid,setisRatevalid] = useState(true)
  const [isyearvalid,setisyearvalid] = useState(true)
  const [isprinciplevalid,setisprinciplevalid] = useState(true)
  const [isValid,setValid] = useState(true)
  const [interest,setInterest] = useState(0)
  const [principal,setPrincipal] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const handleCalculate =(e)=>{e.preventDefault()
   if(!principal || !rate || !year){
  alert("Please Fill The Form")}
    else
    {
      setInterest(principal*rate*year/100)
    }
}
const handleReset = () => {
  setInterest(0)
  setPrincipal(0)
  setRate(0)
  setYear(0)
  setisRatevalid(true)
  setisprinciplevalid(true)
  setisyearvalid(true)
}

  return (
    
        <div style={{height:'100vh'}} className='d-flex w-100 justify-content-center align-items-center bg-dark'>
        <div style={{width:'500px'}} className='bg-light rounded p-5'>
          <div className="heading">
            <h3>Simple Calculator</h3>
            <p>Calculate Your simple interest</p>
          </div>
          <div style={{height:'130px'}} className="interest-card d-flex w-100 justify-content-center align-items-center bg-info flex-column text-light shadow p-3 mb-5  rounded">
            <h1>₹ {' '} {interest} </h1>
            <p className='fw-bold'>
              Total Interest
            </p>
          </div>
          <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField className='w-100 ' id="filled-basic" label="₹ Principal Amount" variant="filled" value={principal || ""} onChange={(e)=>validateInput(e)} name='principle' />
            
          </div>
          {
            !isprinciplevalid && 
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
          }
          <div className='mb-3'>
            <TextField className='w-100 ' id="filled-basic" label="Rate of interest" variant="filled" value={rate || ""} onChange={(e)=>validateInput(e)} name='rate' />
            
          </div>
          {
            !isRatevalid && 
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
          }
          <div className='mb-3'>
            <TextField className='w-100 ' id="filled-basic" label="Time Period" variant="filled" value={year || ""} onChange={(e)=>validateInput(e)}  />
            
          </div>
          {
            !isyearvalid && 
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
          }
          <Stack direction="row" spacing={2}>
          <Button style={{width:'200px',height:'50px'}} disabled={isprinciplevalid && isRatevalid && isyearvalid?false:true} type='submit' className='bg-dark' variant="contained">Calculate</Button>
          <Button style={{width:'100px',height:'50px'}} onClick={handleReset} variant="outlined">Reset</Button>
          </Stack>
          </form>
        </div>
        </div>
     
      
  );
}

export default App;
