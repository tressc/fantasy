import React from 'react';

class FolderForm extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      status: ''
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
    const folder = Object.assign({}, this.state);
    this.props.createFolder({folder: folder}).then(() => {
      if (this.props.errors.length === 0) {
        this.props.closeModal();
      }
    });
  }

  
}
