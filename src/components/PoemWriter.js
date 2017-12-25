import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poemText: '',
      poemValid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    if (target.name === 'poemText') {
      var lines = value.split(/\r*\n/);
      var count = lines.length;
      console.log(count);
      this.state.poemValid = count === 3 && wordCount(lines[1] === 5);
    }
  }

  wordCount(line) {
    words = line.split(' ');
    count = 0;
    for (let i = 0; i < words.count; i++) {
      if (words[i].trim() !== '') {
        count++;
      }
      return count;
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          name="poemText"
          value={this.state.poemText}
          onChange={this.handleInputChange}
        />
        {!this.state.poemValid
          ? <div id="poem-validation-error" style={{ color: 'red' }}>
              This poem is not written in the right structure!
            </div>
          : ''}
      </div>
    );
  }
}

export default PoemWriter;
