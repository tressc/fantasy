import React from 'react';
import onClickOutside from 'react-onclickoutside';

class UserSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      dropdown: 'closed-search'
    };
    this.handleChoice = this.handleChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openDropClass = this.openDropClass.bind(this);
    this.closeDropClass = this.closeDropClass.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  componentWillMount() {
    this.clearErrors();
  }

  clearErrors() {
    this.props.removeMembershipErrors();
  }

  handleClickOutside(e) {
    this.closeDropClass();
  }

  openDropClass() {
    this.setState({ dropdown: 'open-search' });
  }

  closeDropClass() {
    this.setState({ dropdown: 'closed-search' });
  }

  handleChange(e) {
    this.setState({ searchText: e.currentTarget.value });
    if (e.currentTarget.value !== '') {
      this.props.userSearch(e.currentTarget.value);
      this.openDropClass();
    }
  }

  handleChoice(userId, campId) {
    return () => {
      const membership = {player_id: userId, campaign_id: campId};
      this.props.createMembership({membership: membership});
      this.closeDropClass();
      this.state.searchText = '';
    };
  }

  render() {
    let dropDown;
    if (this.state.searchText === '') {
      dropDown = <div/>;
    } else if (this.props.searchResults.length === 0) {
      dropDown = <div>no users found</div>;
    } else dropDown = this.props.searchResults.map(user => {
      return (
        <div
          key={user.id}
          className="search-user"
        >
          <span>
            { user.username }
          </span>
          <button
            onClick={this.handleChoice(user.id, this.props.campId)}
            >invite
          </button>
        </div>
      );
    });

    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map(e => {
        return (
          <div
            key={ this.props.errors.indexOf(e) }
            className='search-errors'
            >
            { e }
          </div>
        );
      });
    }

    return (
      <div>
        <input
          onFocus={ this.clearErrors }
          onChange={ this.handleChange }
          type='text'
          placeholder='search'
          value={ this.state.searchText }
        />
        <div className={ this.state.dropdown }>
          { dropDown }
        </div>
        { errors }
      </div>
    );
  }
}

export default onClickOutside(UserSearch);
