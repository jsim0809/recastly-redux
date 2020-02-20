import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var mapStateToProps = (state) => {
  var searchValue = state[2].searchValue;
  return { searchValue: searchValue };
};

var mapDispatchToProps = (dispatch) => {

};

var SearchContainer = connect(mapStateToProps)(Search);

export default SearchContainer;
