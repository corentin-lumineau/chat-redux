// TODO: add and export your own actions
export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: 'SET_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { author: author, content: content};
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'SEND_MESSAGES',
    payload: promise
  };
}

export function setSelectedChannel(channel) {
  return {
    type: "SELECTED_CHANNEL",
    payload: channel
  }
}