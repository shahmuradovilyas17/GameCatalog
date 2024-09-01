const initialState = {
  playing: [],
  completed: [],
  throw: [],
  planned: [],
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "Playing") {
    return {
      ...state,
      playing: [...state.playing, action.payload],
    };
  }
  if (action.type === "Completed") {
    return {
      ...state,
      completed: [...state.completed, action.payload],
    };
  }
  if (action.type === "Throw") {
    return {
      ...state,
      throw: [...state.throw, action.payload],
    };
  }
  if (action.type === "Planned") {
    return {
      ...state,
      planned: [...state.planned, action.payload],
    };
  }

  return state;
};
