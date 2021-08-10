export default function(state = null, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case "SET_MESSAGES":
      return action.payload.messages;
    case 'SEND_MESSAGES': {
      const newArray = state.slice(0);
      newArray.push(action.payload);
      return newArray;
    }
    default:
      return state;
  }
}
