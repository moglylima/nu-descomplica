export function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state };
    case "SAVE_PIN":
      return { ...state };
    case "CLOSE_PIN":
      return { ...state };
  }
  return state;
}
