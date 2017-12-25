import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      remainingChars: props.maxChars
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      tweet: event.target.value,
      remainingChars = this.props.maxChars - event.target.value.length
     });
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
        <h4>
          {this.state.remainingChars}
        </h4>
      </div>
    );
  }
}

export default TwitterMessage;
