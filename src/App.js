import React, { Component } from "react";
import Header from "./components/Header";
import Song from "./components/songs/songs";
import songs from "./components/songs/data";
import "./App.css";

class App extends Component {

  componentDidMount() {
    console.log("La app se ha cargado correctamente");
  }

  render() {
    return (
      <div className="ipod">
        <div className="screen">
          <Header appName="!Pod Classic" />

          <div className="song-list">
            {songs.map((song, index) => (
              <Song
                key={index}
                title={song.title}
                artist={song.artist}
                duration={song.duration}
              />
            ))}
          </div>
        </div>

        <div className="wheel">
          <div className="center-button"></div>
        </div>
      </div>
    );
  }
}

export default App;