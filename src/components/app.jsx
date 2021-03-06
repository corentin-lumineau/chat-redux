import React from 'react';
import MessageList from '../containers/messages_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
