import RapidAPIconnect from '../library/connector';

const getGamesList = (params) => {
  return (dispatch) => {
    console.log('GET GAMES LIST');
    return RapidAPIconnect(
      'GET',
      'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity'
    ).then((resp) => {
      dispatch({ type: 'SET_GAMES_LIST', payload: resp.data });
    });
  };
};

export { getGamesList }
