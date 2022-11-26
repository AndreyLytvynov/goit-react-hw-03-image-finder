import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    modalVisible: false,
  };

  openModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.openModal}
          src={this.props.webFormatImg}
          alt=""
          className="ImageGalleryItem-image"
        />
        {this.state.modalVisible && (
          <Modal
            largeImage={this.props.largeImage}
            openModal={this.openModal}
          />
        )}
      </li>
    );
  }
}
