import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  validateForm(event) {
    event.preventDefault();
    const { userName, password } = this.state;
    if (userName !== '' && password !== '') {
      this.props.onSubmit(userName, password);
    }
  }

  render() {
    return (
      <form onSubmit={this.validateForm}>
        <div>
          <label>
            Username
            <input
              name="userName"
              id="test-username"
              type="text"
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              name="password"
              id="test-password"
              type="password"
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
