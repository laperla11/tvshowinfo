import React from "react";
import "./App.css";
import "./grid.css";
import SelectShow from "./components/SelectShow.js";
import SelectEpisode from "./components/SelectEpisode.js";
import Episode from "./components/Episode.js";
import MainPage from "./components/MainPage.js";

class App extends React.Component {
  state = {
    shows: [],
    selectedShow: null,
    episodes: [],
    selectedEpisodeId: ""
  };

  componentDidMount() {
    fetch("http://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(json => {
        this.setState({ shows: json });
        console.log(json);
      });
  }

  selectShow = event => {
    fetch(`http://api.tvmaze.com/shows/${event.target.value}/episodes`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          episodes: json,
          selectedEpisodeId: ""
        })
      );
    const selectedShow = this.state.shows.filter(
      show => show.id == event.target.value
    )[0];
    this.setState({
      selectedShow: selectedShow
    });
  };

  select = id => {
    fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          episodes: json,
          selectedEpisodeId: ""
        })
      );
    const selectedShow = this.state.shows.filter(show => show.id == id)[0];
    this.setState({
      selectedShow: selectedShow
    });
  };

  selectEpisode = event => {
    this.setState({ selectedEpisodeId: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <SelectShow
          selectShow={this.selectShow}
          shows={this.state.shows}
          selectedShow={this.state.selectedShow}
        />
        <SelectEpisode
          episodes={this.state.episodes}
          selectEpisode={this.selectEpisode}
          selectedEpisodeId={this.state.selectedEpisodeId}
        />
        <h1>{this.state.selectedShow ? this.state.selectedShow.name : ""}</h1>
        <img
          src={
            this.state.selectedShow ? this.state.selectedShow.image.medium : ""
          }
        />
        {this.state.selectedShow && !this.state.selectedEpisodeId && (
          <h2>All Episode Details</h2>
        )}
        {!this.state.shows.length
          ? "Loading...."
          : this.state.episodes
              .filter(episode =>
                this.state.selectedEpisodeId
                  ? episode.id.toString() === this.state.selectedEpisodeId
                  : true
              )
              .map(episode => {
                return <Episode episode={episode} />;
              })}
        <MainPage
          select={this.select}
          shows={this.state.shows}
          selectedShow={this.state.selectedShow}
        />
      </div>
    );
  }
}

export default App;
