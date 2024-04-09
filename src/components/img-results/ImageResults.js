import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Dialog,
  Button,
  ListItemButton,
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: "",
  };

  handleOpen = (img) => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <ImageList cols={3}>
          {images.map((img) => (
            <ImageListItem key={img.id}>
              <ImageListItemBar
                title={img.tags}
                subtitle={
                  <spam>
                    by <strong>{img.user}</strong>
                  </spam>
                }
                actionIcon={
                  <IconButton
                    onClick={() => this.handleOpen(img.largeImageURL)}
                  >
                    <ZoomInIcon />
                  </IconButton>
                }
              />
              <img src={img.largeImageURL} alt="" />
            </ImageListItem>
          ))}
        </ImageList>
      );
    } else {
      imageListContent = null;
    }

    return (
      <div>
        {imageListContent}
        <Dialog modal={false} open={this.state.open} onClose={this.handleClose}>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
          <img src={this.state.currentImg} alt="" style={{ width: "100%" }} />
        </Dialog>
      </div>
    );
  }
}

ImageResults.propType = { images: PropTypes.array.isRequired };

export default ImageResults;
