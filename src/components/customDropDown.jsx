import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomDropDown extends Component {
  state = { currentSelection: 4 };

  handleChange = (e) => {
    let selectedItem = document.getElementById("customDrop");
    let pageNum = selectedItem.options[selectedItem.selectedIndex].value;
    this.props.onDropChange(pageNum);
    this.setState({ currentSelection: e.target.value });
  };

  render() {
    const mArray = [];
    for (let i = 1; i <= 9; i++) {
      mArray.push(i);
    }

    return (
      <React.Fragment>
        <label>Select Number of Movies to Display </label>

        <select
          id="customDrop"
          onChange={this.handleChange}
          className="ml-3 mb-3 mt-3 btn btn-primary"
          name="Page Size"
          value={this.state.currentSelection}
        >
          {mArray.map((pageNum) => {
            return (
              <option
                value={pageNum}
                onClick={() => {
                  this.props.onDropChange(pageNum);
                }}
              >
                {pageNum}
              </option>
            );
          })}
        </select>
      </React.Fragment>
    );
  }
}

CustomDropDown.propTypes = {
  onDropChange: PropTypes.func,
};

export default CustomDropDown;
