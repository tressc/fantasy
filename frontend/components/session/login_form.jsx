import React from 'react';
import { Link } from 'react-router-dom';
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
    this.props.login({user: user});
  }

  render() {

    const errors = this.props.errors.map(error => {
      return (
        <li>{ error }</li>
      );
    });

    return (
      <div className='session'>
        <div className='session-box'>
          <form onSubmit={this.handleSubmit} className='session-box-form'>
            <input placeholder='username' type='text' value={this.state.username} onChange={this.update('username')}></input>
            <input placeholder='password' type='password' value={this.state.password} onChange={this.update('password')}></input>
            <input type='submit' value='log in' className='submit'></input>
          </form>
          <div className='change-auth'>
            <span>don't have an account?</span>
            <Link to='/signup'>sign up</Link>
          </div>
        </div>
        <ul className='session-errors'>
          { errors }
        </ul>
      </div>
    );
  }
}

export default withRouter(LoginForm);
