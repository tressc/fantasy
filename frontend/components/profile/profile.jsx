import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let redirect;

    if (parseInt(this.props.userId) !== this.props.currentUser.id) {
      redirect = <Redirect to='/login' />;
    }

    return (
      <div>
        { redirect }
        this is your profile page
      </div>
    );
  }
}

export default Profile;
