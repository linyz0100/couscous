import React from "react";
import Ratings from "./Rating";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label
} from "reactstrap";
import SaveIcon from '@material-ui/icons/Save';

export default class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.storeR = this.storeR.bind(this)
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleChange = event => {
    // <input name="description" placeholder="Enter Todo description"
    // type="text" class="form-control" value="My Task">
    let { name, value } = event.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  storeR = (value) => {
    // console.log(value);
    const activeItem = { ...this.state.activeItem, rating: value };
    this.setState({ activeItem });
    // console.log(this.state.activeItem.rating);
  }

  render() {
    const {toggle, onSave} = this.props;
    return(
      <div className="modal">
        <ModalHeader toggle={toggle}></ModalHeader>
        <h4> Change Rating </h4>
        <ModalBody>
          <Label for="song">{this.state.activeItem.song}</Label>
          <Ratings
            getR={this.storeR}
            activeItem={this.state.activeItem}
            onClick={() => onSave(this.state.activeItem, "rating")}
          />
        </ModalBody>
        <ModalFooter>
          <Button className="save" onClick={() => onSave(this.state.activeItem, "rating")}><SaveIcon color="green" fontSize="small"  />
            Save
          </Button>
        </ModalFooter>
      </div>




    )
  }


}
