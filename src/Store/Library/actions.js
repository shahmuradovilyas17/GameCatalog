export const playingGamesAction = (payload) => {
  return {
    type: "PlayingGames",
    payload: payload,
  };
};

export const completedGamesAction = (payload) => {
  return {
    type: "CompletedGames",
    payload,
  };
};

export const throwGamesAction = (payload) => {
  return {
    type: "ThrowGames",
    payload,
  };
};

export const plannedGamesAction = (payload) => {
  return {
    type: "PlannedGames",
    payload,
  };
};

export const watchingAdaptationsAction = (payload) => {
  return {
    type: "WatchingAdaptations",
    payload: payload,
  };
};

export const completedAdaptationsAction = (payload) => {
  return {
    type: "CompletedAdaptations",
    payload,
  };
};

export const throwAdaptationsAction = (payload) => {
  return {
    type: "ThrowAdaptations",
    payload,
  };
};

export const plannedAdaptationsAction = (payload) => {
  return {
    type: "PlannedAdaptations",
    payload,
  };
};
