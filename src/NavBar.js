import { Box, Button, Switch } from '@mui/material'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
    let [checked, setChecked] = useState(true);
    let [theme, setTheme] = useState({bgColor: 'yellow', color: 'primary'})

    let changeTheme = () => {
        setChecked(!checked);
        setTheme(checked ? {bgColor: 'yellow', color: 'primary'}: {bgColor: 'black', color: 'success'});
    }

    return(
        <Box sx={{color:'white', backgroundColor: theme.bgColor, spacing: '20px', boxShadow: 3, position: 'fixed', top: 0, width: '100%'}}>
            <Button startIcon={<HomeIcon color={theme.color}/>}></Button>
            <Button startIcon={<AccountCircleIcon color={theme.color}/>}></Button>
        </Box>
    );
}

export default NavBar;