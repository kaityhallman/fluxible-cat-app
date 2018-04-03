import React, { Component } from 'react';
import { NavLink } from 'fluxible-router';
import connectToStores from 'fluxible-addons-react/connectToStores';

// stores
import UserStore from '../stores/UserStore';

class Nav extends Component {
  render() {
    const selected = this.props.currentRoute;
    const links = this.props.links;
    const loggedInMessage = this.props && this.props.username
                            ? `Welcome, ${this.props.username}`
                            : null;

    const linkHTML = Object.keys(links).map((name) => {
      var className = '';
      var link = links[name];

      if (selected && selected.name === name) {
        className = 'pure-menu-selected';
      }

      return (
        <li className={className} key={link.path}>
          <NavLink
            routeName={link.page}
            activeStyle={{backgroundColor: '#eee'}}
          >
            {link.title}
          </NavLink>
        </li>
      );
    });

    return (
      <ul className="pure-menu pure-menu-open pure-menu-horizontal">
        {linkHTML}
        <li>{loggedInMessage}</li>
      </ul>
    );
  }
}

Nav.defaultProps = {
  selected: null,
  links: {}
};

export default connectToStores(
  Nav,
  [UserStore],
  (context, props) => ({
    username: context.getStore(UserStore).getUsername(),
  })
);
