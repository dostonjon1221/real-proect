import React from 'react'
import {Box} from "@mui/material"
import { FaCamera } from "react-icons/fa";
import "./code.css"
const Code = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='title'>
          <h1>Enter sign-in code</h1>
          <p>We just sent it to mail@pvashenko.com Haven’t received? <a href="#">Resend</a></p>
          <Box className="avatar-items">
                <Box className="avatar">
                <FaCamera className='camera'/>
                </Box>
                </Box>

                
                  <form>
                <div className='code-item'>

                  <div className='places'>
                    <input type="number " />
                  </div>
                  <div className='places'>
                    <input type="number " />
                  </div>
                  <div className='places'>
                    <input type="number " />
                  </div>
                  <div className='places'>
                    <input type="number " />
                  </div>
                  <div className='places'>
                    <input type="number " />
                  </div>
                </div>
                <button className="btn-item">next</button>
                  </form>
                
        </div>
      </div>
    </div>
  )
}

export default Code
