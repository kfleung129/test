import { Box, Paper, Input, Button } from '@mui/material'
import { useState, useEffect,useRef } from 'react'
import Search from './Search.js'

function Main() {
    return(
		<Box sx={{ml: 35, mt: 35}}>
			<Box sx={{pl: 5, pr: 5, borderRadius: 30, boxShadow: 6, width: 'fit-content', backgroundColor: '#30B0FF'}}>
				{<h1 style={{fontSize: '4rem'}}>Hello World</h1>}
			</Box>
			<Box>
				<Box sx={{fontSize: 20}}>
					This is a testing website of ReactJS.
				</Box>
				<Box sx={{fontSize: 20}}>
					First trial on React + MUI library.
				</Box>
			</Box>
			<Search/>
		</Box>
	);
}

export default Main;