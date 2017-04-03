import React from 'react';


class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}


class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.items.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={this.items.category} key={this.items.category} />);
      }
      rows.push(<ProductRow items={this.items} key={this.items.name} />);
      lastCategory = this.items.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>

          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show items in stock
        </p>
      </form>
    );
  }
}

class SearchItemList extends React.Component {
  render() {
    return (
      <div>
        <ProductTable items={this.props.items} />
      </div>
    );
  }
}

SearchItemList.propTypes = {
  children: React.PropTypes.object,
  userStore: React.PropTypes.object,
  itemStore: React.PropTypes.object,
  items: React.PropTypes.object,
  user: React.PropTypes.object
};
