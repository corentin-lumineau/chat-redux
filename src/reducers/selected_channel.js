export default function(state = null, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "SET_CHANNEL":
      return action.type;
    default:
      return state;
  }
}
