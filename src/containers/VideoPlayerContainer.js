import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (state) => {
  var currentVideo = state[0].currentVideo;
  return { video: currentVideo };
};

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;
