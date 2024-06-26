import React, { Component } from "react";
import Modal from "/src/components/Modal";
import 'basiclightbox/dist/basicLightbox.min.css';
import propTypes from "prop-types"

export default class ImageGalleryItem extends Component {

    render(){
        
        const {image} = this.props;
        return(
            <li className="ImageGalleryItem ImageGalleryItem-image">
                <Modal imageURL = {image.largeImageURL} alt = {image.tags}>
                <img src={image.webformatURL} alt={image.tags} />
                </Modal>
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
        image:propTypes.shape({
            largeImageURL : propTypes.string.isRequired,
            tags : propTypes.string.isRequired,
            webformatURL : propTypes.string.isRequired
        }    
        )
}

