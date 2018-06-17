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

  handleChoice() {
    this.closeDropClass();
    this.state.searchText = '';
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
        >
          { user.username }
        </div>
      );
    });

    return (
      <div>
        <input
          onChange={ this.handleChange }
          type='text'
          placeholder='search'
          value={ this.state.searchText }
        />
      <div>
          { dropDown }
        </div>
      </div>
    );
  }
}

export default onClickOutside(UserSearch);
