import React, { Component } from "react";

export default class SelectShow extends Component {
  render() {
    return (
      <div>
        <h1 id="top">TV Shows Finder</h1>
        Choose a TV Show :
        <select onChange={this.props.selectShow} name="episodes">
          <option value={""}>Select an option...</option>
          {this.props.shows.map(show => {
            return (
              <option name={show.name} value={show.id}>
                {show.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
