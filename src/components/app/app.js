import {Routes,Route} from "react-router-dom"
import {Box} from "@mui/material"
import {Email,Login, Code} from "../"

const App = ()=> {
  return (
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path="email" element={<Email></Email>}/>
    <Route path="code" element={<Code></Code>} />
    
    
    </Routes>
  );
}

export default App;
