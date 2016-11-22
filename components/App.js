const React = require('react');
const { Component } = require('react');

const FruitBasket = require('./FruitBasket');

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedFilter: null,
      filters: [],
      fruit: []
    };

  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }


  fetchFruit(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  render(){

    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        selectedFilter={this.state.selectedFilter}
        updateFilterCallback={this.handleFilterChange} />
    );

  }

}


module.exports = App;
