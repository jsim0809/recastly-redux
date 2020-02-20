import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    var newState = state.map((obj) => {
      if (obj.currentVideo) {
        return { currentVideo: action.video };
      } else {
        return obj;
      }
    });
    return newState;
  } else {
    return state;
  }
};

export default currentVideoReducer;