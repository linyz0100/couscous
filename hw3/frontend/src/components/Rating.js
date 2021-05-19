import React from "react";
import Rating from "react-rating";

export default class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleOnClick = () => {
    this.props.getR(this.state.activeItem.rating)
  }

  handleChange = value => {
    // console.log(value);
    const activeItem = { ...this.state.activeItem, rating: value };
    this.setState({ activeItem });
    this.props.getR(value);
  };

  render() {
  return (
    <div className="Rate">
      <Rating
        initialRating={this.state.activeItem.rating}
        onChange={this.handleChange}
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
      />
      <br/><br/>
      </div>
    );
  }
};
