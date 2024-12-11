import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Avatar,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  state = {
    menuStatus: false,
  };

  render() {
    return (
      <AppBar position="fixed" sx={{ backgroundColor: '#282c34' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 800,
                    letterSpacing: '.1rem',
                    color: 'white',
                    textDecoration: 'none',
                    textAlign: 'start',
                  }}
                >
                  Games World
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default NavBar;
