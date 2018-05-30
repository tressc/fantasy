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
      <div className='profile-home'>
        { redirect }
        <div>
          <span>game master of:</span>
          <ul>
            <li>
              <a>alaria</a>
            </li>
            <li>
              <a>future sport</a>
            </li>
            <li>
              <a>wasteland</a>
            </li>
          </ul>
          <button onClick={() => this.props.openModal('campaign')}>
            new campaign
          </button>
        </div>
        <div>
          <span>player in:</span>
          <ul>
            <li>
              <a>space mountain</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
