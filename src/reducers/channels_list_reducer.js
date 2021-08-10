export default function(state = null, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "SET_CHANNELS_LIST":
      return action.type;
    case "SELECTED_CHANNEL":
      return action.payload;
    default:
      return state;
  }
}
