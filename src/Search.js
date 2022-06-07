import { useEffect, useState } from 'react'
import { Box, Input } from '@mui/material'

function Search() {
    let [value, setValue] = useState('');
    let items = ['Apple', 'Computer Science', 'HKHS', 'iPad', 'iPhone', 'Asus', 'AMD', 'Youtube', 'Facebook'];
    let [results, setResults] = useState(items);
    useEffect(()=>{
        setResults(items.filter(item => item.toLowerCase().includes(value.toLowerCase())));
    });
    return(
        <Box>
            <Input
                placeholder='Search here'
                onChange={(e)=>setValue(e.target.value)}
                sx={{color: 'yellow', fontSize: '15px'}}
            />
            <Box>
                {value}
                {results.map((item) => <p>{item}</p>)}
            </Box>
        </Box>
    );
}

export default Search;