import React, { Component } from 'react';
import { connect } from 'react-redux'
import { writeChannelName, postChannel } from '../store';

function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
          <input
            value={props.newChannelEntry}
            onChange={props.handleChange}
            className="form-control"
            type="text"
            name="channelName"
            placeholder="Enter channel name"
          />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

const mapStateToProps = function (state) {
  return {};
};


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange (evt) {
      dispatch(writeChannelName(evt.target.value));
    },
    // handleSubmit (evt) {
    //   evt.preventDefault();
    //   const name = evt.target.channelName.value;
    //   dispatch(postChannel({ name }));  // this is ES6 object destructuring! It's equivalent to { name: name }
    // }, 
    handleSubmit ( evt) {
      evt.preventDefault();
      const name = evt.target.channelName.value
      console.log('NAME', name)
      dispatch(postChannel({ name }, ownProps.history));
      dispatch(writeChannelName(''));
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default Container;