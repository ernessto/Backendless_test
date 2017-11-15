import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import components from './styles';
const {
  TabsContainer,
  Tab
} = components;


class Header extends Component {

  static propTypes = {
    tabsData: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    const { tabsData } = this.props;
    let tabLinks = null;
    if(tabsData) {
      tabLinks = tabsData.map(item => {
        return (
          <Tab key={item.id}>
            <NavLink to={`/${item.id}`}>{item.title}</NavLink>
          </Tab>
        )
      });
    }

    return (
      <header>
        {tabLinks
          ?
          <nav>
            <TabsContainer>
              {tabLinks}
            </TabsContainer>
          </nav>
          :
          null
        }
      </header>
    )

  }
}

export default Header;
