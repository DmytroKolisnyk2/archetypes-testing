import React, { Component } from 'react';

const asyncComponent = ({ loader, loading: Loading }) => {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await loader();

      this.setState({ component });
    }

    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  };
};
export default asyncComponent