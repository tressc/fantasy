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
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
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
    this.props.signup({user: user});
  }

  render() {
    // let errors;
    //
    // if (this.props.errors.length > 0) {
    //   errors = <li> { this.props.errors[0].toLowerCase } </li>;
    // }

    const errors = this.props.errors.map(error => {
      return (
        <li>{ error.toLowerCase() }</li>
      );
    });

    return (
      <div className='session'>
        <div className='session-box'>
          <form onSubmit={this.handleSubmit} className='session-box-form'>
            <input placeholder='username' type='text' value={this.state.username} onChange={this.update('username')}></input>
            <input placeholder='password' type='password' value={this.state.password} onChange={this.update('password')}></input>
            <input type='submit' value='sign up' className='submit'></input>
          </form>
          <div className='change-auth'>
            <span>already have an account?</span>
            <Link to='/login'>log in</Link>
          </div>
        </div>
        <ul className='session-errors'>
          { errors[0] }
        </ul>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
