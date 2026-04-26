import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      welcomeMessage: 'Welcome',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ welcomeMessage: 'Ready' });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Estado anterior:', prevState);
  }

  handleButtonClick = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    return (
      <header>
        <h1>{this.props.appName}</h1>

        <button onClick={this.handleButtonClick}>
          {this.state.isLoggedIn ? 'Logout' : 'Login'}
        </button>

        <p>{this.state.welcomeMessage}</p>

        <p>
          {this.state.isLoggedIn
            ? 'Usuario conectado'
            : 'No estás conectado'}
        </p>
      </header>
    );
  }
}

export default Header;