export const playingAction = (payload) => {
  return {
    type: "Playing",
    payload: payload,
  };
};

export const completedAction = (payload) => {
  return {
    type: "Completed",
    payload,
  };
};

export const throwAction = (payload) => {
  return {
    type: "Throw",
    payload,
  };
};

export const plannedAction = (payload) => {
  return {
    type: "Planned",
    payload,
  };
};
