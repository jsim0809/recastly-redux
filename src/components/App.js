import React from 'react';
import VideoListContainer from './VideoList.js';
import VideoPlayerContainer from './VideoPlayer.js';
import SearchContainer from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.getYouTubeVideos('react tutorials');         ///
  // }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
