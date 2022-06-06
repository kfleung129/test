import { Box, Fade, Grow } from '@mui/material'
import { useState, useEffect } from 'react'

function Main() {
	let [started, setStarted] = useState(false);
	function change(e) {
		e.target.style.backgroundColor = '#30B0FF';
	}
	useEffect(()=>{
		setStarted(!started);
	},[]);
    return(
		<Box sx={{ml: 35, mt: 35}}>
			<Fade in={started} timeout={{ enter: 1000 }}>
				<Box onMouseOver={change} sx={{pl: 5, pr: 5, borderRadius: 30, boxShadow: 6, width: 'fit-content', backgroundColor: '#30B0FF'}}>
					{<h1 style={{fontSize: '4rem'}}>Hello World</h1>}
				</Box>
			</Fade>
			<Box sx={{ml: 1}}>
				<Grow in={started} timeout={{ enter: 1500 }}>
					<Box sx={{fontSize: 20}}>
						This is a testing website of ReactJS.
					</Box>
				</Grow>
				<Grow in={started} timeout={{ enter: 2000 }}>
					<Box sx={{fontSize: 20}}>
						First trial on React + MUI library.
					</Box>
				</Grow>
			</Box>
		</Box>
	);
}

export default Main;