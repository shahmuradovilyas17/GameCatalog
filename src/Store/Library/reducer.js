const initialState = {
  playingGames: [],
  completedGames: [],
  throwGames: [],
  plannedGames: [],
  watchingAdaptations: [],
  completedAdaptations: [],
  throwAdaptations: [],
  plannedAdaptations: [],
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "PlayingGames") {
    return {
      ...state,
      playingGames: [...state.playingGames, action.payload],
    };
  }
  if (action.type === "CompletedGames") {
    return {
      ...state,
      completedGames: [...state.completedGames, action.payload],
    };
  }
  if (action.type === "ThrowGames") {
    return {
      ...state,
      throwGames: [...state.throwGames, action.payload],
    };
  }
  if (action.type === "PlannedGames") {
    return {
      ...state,
      plannedGames: [...state.plannedGames, action.payload],
    };
  }
  if (action.type === "WatchingAdaptations") {
    return {
      ...state,
      watchingAdaptations: [...state.watchingAdaptations, action.payload],
    };
  }
  if (action.type === "CompletedAdaptations") {
    return {
      ...state,
      completedAdaptations: [...state.completedAdaptations, action.payload],
    };
  }
  if (action.type === "ThrowAdaptations") {
    return {
      ...state,
      throwAdaptations: [...state.throwAdaptations, action.payload],
    };
  }
  if (action.type === "PlannedAdaptations") {
    return {
      ...state,
      plannedAdaptations: [...state.plannedAdaptations, action.payload],
    };
  }

  return state;
};
