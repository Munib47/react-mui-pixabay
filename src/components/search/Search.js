import React, { Component } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axioss from "axios";
import ImageResults from "../img-results/ImageResults";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "43205933-e48d65489462148594313e0d0",
    images: [],
  };

  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axioss
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };

  onAmountChange = (event) =>
    this.setState({ amount: event.target.value }, () => {
      axioss
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
        )
        .then((res) => this.setState({ images: res.data.hits }))
        .catch((err) => console.log(err));
    });

  render() {
    console.log(this.state);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          label="Search For Images"
          fullWidth={true}
          sx={{ marginTop: 2 }}
        />
        <br />
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <InputLabel id="demo-simple-select-label">Amount</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.amount}
            label="Amount"
            onChange={this.onAmountChange}
          >
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={15}>Fifteen</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={50}>Fifty</MenuItem>
          </Select>
        </FormControl>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
