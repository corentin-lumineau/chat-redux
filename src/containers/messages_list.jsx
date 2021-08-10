import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';


class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }


  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  componentDidmount() {
    this.refresher = setInterval(this.props.fetchMessages, 5000);
  }

  render() {
    return (
      <div ref={(list) => { this.list = list; }} className="messages-list">
        <div className="channel-title">
          <h4>Channel #{this.props.selectedChannel}</h4>
        </div>
        <div>
          {this.props.messagesList.map((mes) => {
            return (
              <Message message={mes} key={mes.created_at} />
            );
          })}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messagesList: state.messagesList,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
