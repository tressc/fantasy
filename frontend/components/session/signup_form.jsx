import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    // TODO: bind methods
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TODO: fill in methods

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
    this.props.signup({user: user});
  }

  render() {

    // TODO: map errors to li's

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='username' type='text' value={this.state.username} onChange={this.update('username')}></input>
          <input placeholder='password' type='password' value={this.state.password} onChange={this.update('password')}></input>
          <input type='submit' value='sign up'></input>
        </form>
        <span>already have an account? <Link to='/login'>log in</Link></span>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
