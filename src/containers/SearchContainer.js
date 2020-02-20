import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var mapStateToProps = (state) => {
  return { searchInput: state.searchInput };
};

var mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => {
      dispatch(handleVideoSearch(q));
    }
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
