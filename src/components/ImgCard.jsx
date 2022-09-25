import React, { Component } from "react";
import Image from "react-bootstrap/Image";

export default class ImgCard extends Component {
  render() {
    return (
      <div className="item">
        <Image className="card item" src={this.props.img}></Image>
      </div>
    );
  }
}
