import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/navbar';

class AppPage extends React.Component {
    state = {  } 
    render() { 
        return (
        <>
            <NavBar />
            <Box mt={8}>
                <Outlet/>
            </Box>
        </>
        );
    }
}
 
export default AppPage;