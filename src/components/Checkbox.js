import React from 'react';

class Checkbox extends React.Component {
  constructor () {
    super();
    this.state = {
      isChecked: false
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  toggleCheckboxChange ()  {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: React.PropTypes.string.isRequired,
  handleCheckboxChange: React.PropTypes.func.isRequired
};

export default Checkbox;
