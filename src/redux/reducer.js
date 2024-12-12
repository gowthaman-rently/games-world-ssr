const gamesList = (state = [], action) => {
  switch (action.type) {
    case 'SET_GAMES_LIST':
      return action.payload;
    default:
        return state;
  }
};

export { gamesList };
