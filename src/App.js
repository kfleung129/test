import './App.css';
import NavBar from './NavBar.js'
import Main from './Main.js'
import { Box } from '@mui/material'
import { Route } from 'react-router'

function App() {
  
  return (
    <Box sx={{height: window.innerHeight, backgroundColor: '#55BEFF', position: 'fixed', width: '100%'}}>
      <NavBar/>
      <Main/>
    </Box>
  );
}

export default App;
