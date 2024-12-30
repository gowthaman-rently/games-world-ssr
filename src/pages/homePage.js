import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import GameCard from '../components/gameCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesList } from '../redux/action';

const ColorButton = styled(Button)(({ theme }) => ({
  color: 'white',
  paddingBottom: 3,
  backgroundColor: '#3a3f44',
  '&:hover': {
    backgroundColor: '#3a3f44',
  },
}));

function HomePage() {
  const [count, setCount] = useState(8);
  const dispatch = useDispatch();
  const { games } = useSelector((state) => ({
    games: state.gamesList,
  }));

  useEffect(() => {
    dispatch(getGamesList());
  }, []);

  return (
    <div>
      {games.length ? (
        <Box pb={5}>
          <Box
            pt={8}
            pb={4}
            sx={{
              background:
                "url('https://www.freetogame.com/assets/images/paladins.png')",
              borderBottom: '1px solid white',
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ margin: 'auto', color: 'white', fontWeight: 'bold', pb: 2 }}
            >
              Discover the best free-to-play games!
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ margin: 'auto', color: 'white', pb: 3, opacity: 0.7 }}
            >
              Enter a world of adventure and excitement, where anything is
              possible and the only limit is your imagination.
            </Typography>
            <Link to="/explore" style={{ textDecoration: 'none' }}>
              <ColorButton variant="contained">Explore</ColorButton>
            </Link>
          </Box>
          <Typography
            variant="h5"
            component="div"
            sx={{
              paddingTop: 3,
              color: 'white',
              fontWeight: 'bold',
              opacity: 0.75,
            }}
          >
            Most Popular
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, lg: 3 }}
            sx={{ padding: 4 }}
            justifyContent="space-evenly"
          >
            {games.slice(0, count).map((game, ind) => {
              return (
                <Grid item key={ind} xs={12} md={4} lg={3}>
                  <GameCard game={game} />
                </Grid>
              );
            })}
          </Grid>
          {games.length > count && (
            <ColorButton
              onClick={() => {
                setCount(count + 8);
              }}
            >
              Load More
            </ColorButton>
          )}
        </Box>
      ) : (
        <CircularProgress sx={{ my: 7 }} size={30} />
      )}
    </div>
  );
}

export default HomePage;
