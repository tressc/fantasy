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
  }

  // TODO: fill in methods

  render() {

    // TODO: map errors to lis

    return (
      <div>
        <span>this is the signup form</span>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
