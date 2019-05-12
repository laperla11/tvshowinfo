import React, { Component } from "react";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.shows.map(show => (
          <a href="#top">
            <img
              onClick={this.props.select.bind(this, show.id)}
              src={show.image.medium}
            />
          </a>
        ))}
        );
      </div>
    );
  }
}
