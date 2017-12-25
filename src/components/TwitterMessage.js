import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange(event) {
    this.setState({ tweet: event.target.value });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.tweet}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;
