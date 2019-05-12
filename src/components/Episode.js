import React, { Component } from "react";
const stripHtml = require("string-strip-html");

export default class Episode extends Component {
  render() {
    const {
      season,
      number,
      name,
      image,
      summary,
      airdate
    } = this.props.episode;
    return (
      <div>
        <p>
          S{season}E{number} : {name}
        </p>
        <div>{image ? <img src={image.medium} /> : <img src={null} />}</div>
        <p>{stripHtml(summary)}</p>
        <p>Aired : {airdate}</p>
      </div>
    );
  }
}
