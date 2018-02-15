import React, { Component } from 'react';
import PropType from 'prop-types';

const propTypes = {
  url: PropType.string,
  fetchData: PropType.func.isRequired,
  data: PropType.node,
  hasLoaded: PropType.bool,
  hasErrored: PropType.bool,
};

class APICall extends Component {
  constructor() {
    super();
    this.state = {
      hasLoaded: false,
      data: false,
    };
  }

  /**
   * Data response structure example
   * {time: "09:46:01 PM", milliseconds_since_epoch: 1509745561437, date: "11-03-2017"}
   */

  render() {
    const { data, hasLoaded, hasErrored } = this.props;
    return (
      <div className="api-call">
        {/* Case if waiting for response */}
        {!hasLoaded && !data && <div className="loading-cls">Loading..</div>}

        {/* Case if successful response */}
        {hasLoaded &&
          data && (
            <div className="data">
              {JSON.stringify(data)}
            </div>
          )}

        {/* Case if error response */}
        {hasErrored && <div className="error">Error on fetch!</div>}
      </div>
    );
  }
}

APICall.propTypes = propTypes;

export default APICall;
