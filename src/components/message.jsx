import React, { Component } from 'react';


function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const c = (hash & 0x00FFFFFF)
  .toString(16)
  .toUpperCase();

  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

const Message = (props) => {

  return (
    <div className="message">
      <h2 style={{ color: strToRGB(props.message.author) }}>{props.message.author}</h2> <p>{props.message.created_at}</p>
      <h4>{props.message.content}</h4>
    </div>
  );
};


export default Message;
