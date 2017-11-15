import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import getAsyncComponent from './components/AsyncRoute';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Loader from './components/Loader';

import h from './helpers';

import components from './App_styles';
const { TabsContainer } = components;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      tabsData: null
    }
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5a0c55503200007a3de9677c')
      .then(response => {
        return response.json()
      })
      .then(data => {
        data.sort(h.compareTabs);
        this.setState(() => ({ tabsData: data }));
      })
      .catch(err => {
        this.setState(() => ({ errors: err }));
      });
  }

  render() {
    const { tabsData, errors } = this.state;
    let asyncRoutes = null;
    if (tabsData) {
      asyncRoutes = tabsData.map(item => {
        return <Route key={item.id} path={`/${item.id}`} component={getAsyncComponent(() => import(`${item.path}`))} />
      });
      asyncRoutes.push(<Redirect key={'redirectToFirstTab'} exact from={'/'} to={tabsData[0].id}/>);
    }
    return (
      <Router>
        {!errors
          ?
          <TabsContainer>
            <Route path={'/'}>
              <Header tabsData={tabsData} />
            </Route>
            <Switch>
              {asyncRoutes ? asyncRoutes : <Route path={'/'} component={Loader} />}
              <Route component={NotFound} />
            </Switch>
          </TabsContainer>
          :
          <h3>{errors}</h3>
        }
      </Router>
    );

  }
}

export default App;
