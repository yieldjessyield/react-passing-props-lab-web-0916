const React = require('react');

const Filter = ({
  filters,
  handleChange
}) => (

    <select onChange={handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>

  );

  // fetchFilters() {
  //   fetch('/api/fruit_types')
  //     .then(res => res.json())
  //     .then(filters => this.setState({filters: filters}));
  // }

  Filter.defaultProps = {
    filters: [],
    handleChange: function() {}
  };

module.exports = Filter;
