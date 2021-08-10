import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedChannel, fetchMessages } from '../actions';

class ChannelList extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleSelectedChannel = (event) => {
    this.props.setSelectedChannel(event.currentTarget.innerHTML);
  }

  render() {
    return (
      <div className="channels-list">
        {this.props.channels.map((channel) => {
          return (
            <div className={`channel${this.props.selectedChannel === channel ? ' active' : ''}`} onClick={this.handleSelectedChannel}>
              {channel}
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channelsList,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setSelectedChannel, fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
