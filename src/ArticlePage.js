import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ArticlePage extends Component {
  render() {
    let data = this.props.info;
    console.log(this.props);
    return (
      <div>
        <h3>{data.titre}</h3>
      </div>
    );
  }
}
