import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

import SaveIcon from '@material-ui/icons/Save';
// import CancelIcon from '@material-ui/icons/Cancel';

export default class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleChange = event => {
    // <input name="description" placeholder="Enter Todo description"
    // type="text" class="form-control" value="My Task">
    let { name, value } = event.target;
    // if (event.target.type === "checkbox") {
    //   value = event.target.checked;
    // }
    // [name]: value sets the name of the task to the new value the user entered
    // (e.g., title to "Another Task" or description to "Sweep floor").
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  render() {
    const {toggle, onSave} = this.props;
    return(

      <div className="modal" >
      <ModalHeader toggle={toggle}></ModalHeader>
        <h4> Edit Song </h4>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="song">Song</Label>
              <Input
                type="text"
                name="song"
                value={this.state.activeItem.song}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="artist">Artist</Label>
              <Input
                type="text"
                name="artist"
                value={this.state.activeItem.artist}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="genre">Genre</Label>
              <Input
                type="text"
                name="genre"
                value={this.state.activeItem.genre}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="release_date">Release Date</Label>
              <Input
                type="text"
                name="release_date"
                value={this.state.activeItem.release_date}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>

          <Button className="save" onClick={() => onSave(this.state.activeItem, "song")}>
            Save
          </Button>

      </div>




    )
  }


}






