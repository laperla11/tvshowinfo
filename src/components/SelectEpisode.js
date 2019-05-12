import React, { Component } from "react";

export default class SelectEpisode extends Component {
  render() {
    return (
      <div>
        Choose an episode :
        <select
          onChange={this.props.selectEpisode}
          value={this.props.selectedEpisodeId}
          name="episodes"
        >
          <option value={""}>Select an option...</option>
          {this.props.episodes.map(episode => {
            return (
              <option value={episode.id}>
                S{episode.season}E{episode.number} {episode.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
