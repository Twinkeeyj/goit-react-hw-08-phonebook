import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import listAction from '../../redux/listActions';
import selector from "../../redux/listSelector"


const FilterName = ({ filterRender, filter }) => (
  <div>
    <label>Find contacts by name</label>
    <input
      type="text"
      value={filter}
      onChange={e => filterRender(e.target.value)}
    />
  </div>
);

FilterName.propTypes = {
  filterRender: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const mapStateToProps = state =>
({
  filter: selector.getFilter(state),
});
const mapDispatchToProps = {
  filterRender: listAction.filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
