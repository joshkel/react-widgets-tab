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
  render() {
    return (
      <div className="index">
        <NumberPicker/>
        <NumberPicker format="-0.000"/>
        <NumberPicker/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
