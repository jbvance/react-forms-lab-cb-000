import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };

    this.handleChange = this.handleChange.bind(this);
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
