import React, { Component } from "react";

class CustomDropDown extends Component {
  state = {};



  render() {
    const mArray = [];
    for (let i = 1; i <= 9; i++) {
      mArray.push(i);
    }

    return (
      <React.Fragment>
        <label>Select Number of Movies to Display </label>

        <select className="ml-3 mb-3 mt-3 btn btn-primary" name="Page Size">
          {mArray.map((pageNum) => {
            return<option
              value={pageNum}
              onClick={() => {
                this.props.onDropChange(pageNum);
              }}
            >
              {pageNum}
            </option>;
          })}
        </select>
      </React.Fragment>
    );
  }
}

export default CustomDropDown;
