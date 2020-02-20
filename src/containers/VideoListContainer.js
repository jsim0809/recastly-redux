import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (state) => {
  var videoList = state[1].videoList;
  return { videos: videoList };
};

var VideoListContainer = connect(mapStateToProps)(VideoList);

export default VideoListContainer;
