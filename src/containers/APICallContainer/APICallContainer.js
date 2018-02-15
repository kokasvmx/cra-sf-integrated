import React from 'react';
import { connect } from 'react-redux';
import APICall from 'components/APICall';
import { apiFetchData } from 'actions/APICall';

const mapStateToProps = state => ({
  data: state.APICall.data,
  hasLoaded: state.APICall.hasLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => dispatch(apiFetchData(url)),
});

export class APICallContainer extends React.PureComponent {
  static defaultProps = {
    url: 'http://date.jsontest.com/',
  };
  
  componentDidMount() {
    this.props.fetchData(this.props.url);
  }
  render() {
    console.log(this.props);
    return <APICall data={this.props.data} hasLoaded={this.props.hasLoaded} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(APICallContainer);
