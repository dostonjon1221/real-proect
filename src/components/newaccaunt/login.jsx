import React from 'react'
import {Stack,Button,Link} from "@mui/material"
import { Box } from '@mui/system'
import { FaCamera } from "react-icons/fa";
import TextField from '@mui/material/TextField';    
import { useState } from 'react';

import "./login.css"
import Email from '../email/email';

const Login = () => {
const [val, setVal] = useState([])
const [name,setName] = useState([])

const click = (e) =>{
  e.preventDefault()
  console.log(val)
    console.log(name)
}
const change = (event) =>{
    
    setVal(event.target.value)
}
const last = (e) =>{
    setName(e.target.value)
}

  return (
    <Stack className='main' >
        <Box className="container">
            <Box className="title">
                <h1>
                    New Account
                </h1>
                <p>
                Introduce yourself
                </p>
                <Box className="avatar-items">
                <Box className="avatar">
                <FaCamera className='camera'/>
                </Box>
                </Box>

                      <Box className="inputs">
                        <Box className="forms   ">
                           <form >
                            <div className="inputbox">
                            <input value={val} type="text"  onChange={change} required="required"  />
                            <span>First Name</span>
                            </div>
                            <div className="inputbox">
                            <input type="text" value={name} onChange={last} required="required"  />
                            <span>Last Name</span>
                            </div>
                            <div className="inputbox">
                            {/* <input type="button" value="submit" /> */}
                            <Link to='email'>
                            <Button className='btn' href="/email" variant="contained" onClick={click} >Click</Button>
                            </Link>
                            </div>
                        </form>

                            
                            
                         
                            
                            </Box>
                        </Box>



                </Box>
        </Box>
    </Stack>
  )
}

export default Login