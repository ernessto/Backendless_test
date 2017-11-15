import React, { Component } from 'react';

import Loader from '../Loader';

export default function getAsyncComponent(importedRoute) {

  class AsyncComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {
        route: null
      }
    }

    async componentDidMount() {
      const { default: route } = await importedRoute();
      this.setState({ route });
    }

    render() {
      const AsyncRoute = this.state.route;
      return AsyncRoute ? <AsyncRoute {...this.props} /> : <Loader/>
    }
  }

  return AsyncComponent;
}
