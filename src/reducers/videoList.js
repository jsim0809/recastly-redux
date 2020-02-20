import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    var newState = state.map((obj) => {
      if (obj.videoList) {
        return { videoList: action.videos };
      } else {
        return obj;
      }
    });
    return newState;
  } else {
    return state;
  }
};

export default videoListReducer;
