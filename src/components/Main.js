require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {
  NumberPicker
} from 'react-widgets';

require('react-widgets/lib/less/react-widgets.less');

var numberLocalizer = require('react-widgets/lib/localizers/simple-number');
numberLocalizer();

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {unformatted: 0, formatted: 0};
  }
  render() {
    return (
      <div className="index">
        <label>
          Uncontrolled, unformatted
          <NumberPicker/>
        </label>
        <label>
          Uncontrolled, formatted
          <NumberPicker format="-0.000"/>
        </label>
        <label>
          Controlled, unformatted
          <NumberPicker value={this.state.unformatted} onChange={(value) => this.setState({unformatted: +value})}/>
        </label>
        <label>
          Controlled, formatted
          <NumberPicker format="-0.000" value={this.state.formatted} onChange={(value) => this.setState({formatted: +value})}/>
        </label>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
