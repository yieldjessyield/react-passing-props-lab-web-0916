const React = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = ({
  fruit,
  filters,
  selectedFilter,
  updateFilterCallback
}) => {
  return (
      <div className="fruit-basket">
        <Filter
          filters={filters}
          handleChange={updateFilterCallback} />
        <FilteredFruitList
          fruit={fruit}
          filter={selectedFilter} />
      </div>
    );
  };

  FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};




  // handleFilterChange(e) {
  //   console.log('new filter: ', e.target.value);
  //   this.setState({ selectedFilter: e.target.value });
  // }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

module.exports = FruitBasket;
