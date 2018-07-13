/*global Dynamsoft*/
import React, { Component }from 'react';
import './WebTwain.css';
require("dwt");

export class WebTwain extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Dynamsoft.WebTwainEnv.ProductKey="t01065QEAAHv8rl9vFXjhUsMBoI7a3BuWVy+dodZrS6yXntx8X29uh/pVbTb1N8d/w/rLIBt/FR11C6giLVATMW9GvQVUPRZg3KzajfxlDWMfpvIwmZ4w905m3GhuJGBsbsj5Z4Ma7Vkv4U9eUw==";
    var dwObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    var bSelected = dwObject.SelectSource();
    if (bSelected) {
      var onAcquireImageSuccess = function() { dwObject.CloseSource(); };
      var onAcquireImageFailure = onAcquireImageSuccess;
      dwObject.OpenSource();
      dwObject.AcquireImage({}, onAcquireImageSuccess, onAcquireImageFailure);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Scan Document</button>
        <div id="dwtcontrolContainer"></div>
      </div>
    );
  }
}

