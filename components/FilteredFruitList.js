const React = require('react');

const FilteredFruitList = ({
  fruit,
  filter
}) => {
  const fruitList = !filter ?  fruit : fruit.filter(i => i.fruit_type == filter);

  return (
    <ul className="fruit-list">
      {fruitList.map((fruit, idx) => <li key={idx}>{fruit.char}</li>)}
    </ul>
  );
};

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

  // componentWillMount() {
  //   fetch('/api/fruit')
  //     .then(res => res.json())
  //     .then(fruit => this.setState({ items: fruit}));
  // }

//   render() {
//     const list = !this.props.filter ? this.state.items :
//       this.state.items.filter(i => i.fruit_type == this.props.filter);

//     return (
//       <ul className="fruit-list">
//         {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
//       </ul>
//     );
//   }
// }

module.exports = FilteredFruitList;

