import React, { Component } from 'react';
import './WebTwain.css';
import Dynamsoft from 'dwt';

export class WebTwain extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  loadDWT() {
    Dynamsoft.WebTwainEnv.Load();
  }

  handleClick() {
    var dwObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
    if (dwObject) {
      var bSelected = dwObject.SelectSource();
      if (bSelected) {
        var onAcquireImageSuccess = function () { dwObject.CloseSource(); };
        var onAcquireImageFailure = onAcquireImageSuccess;
        dwObject.OpenSource();
        dwObject.AcquireImage({}, onAcquireImageSuccess, onAcquireImageFailure);
      }
    } else {
      alert("Please press 'Load DWT' first!");
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.loadDWT}>Load DWT</button><span>   </span>
        <button onClick={this.handleClick}>Scan Document</button>
        <div id="dwtcontrolContainer"></div>
      </div>
    );
  }
}

