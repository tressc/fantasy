import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let redirect;

    if (parseInt(this.props.userId) !== this.props.currentUser.id) {
      redirect = <Redirect to='/' />;
    }

    return (
      <div>
        { redirect }
        <button onClick={() => this.props.openModal('campaign')}>
          new campaign
        </button>
      </div>
    );
  }
}

export default Profile;
