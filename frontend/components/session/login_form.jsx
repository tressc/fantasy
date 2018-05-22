import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => {
      this.setState({
        [field]: event.currentTarget.value
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login({user: user});
  }

  render() {

    // TODO: map errors to li's

    return (
      <div>
        <form>
          <input placeholder='username' type='text' value={this.state.username} onChange={this.update('username')}></input>
          <input placeholder='password' type='password' value={this.state.password} onChange={this.update('password')}></input>
          <input type='submit' value='log in'></input>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
