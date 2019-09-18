import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item
          as={Link}
          to='/home'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/about'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/contacts'
          name='contacts'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            as={Link}
            to='/'
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
