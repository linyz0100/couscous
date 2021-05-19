import React from "react";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";
import axios from "axios";
import "./App.css";
import EditIcon from '@material-ui/icons/Edit';
import StarRateIcon from '@material-ui/icons/StarRate';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      songList: [],
      ratingList: [],
      activeItem: {
        username: "",
        song: "",
        artist: "",
        genre: "",
        release_date: 0,
        rating: 0
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/users/")
      .then(res => this.setState({ userList: res.data }))
      .catch(err => console.log(err));
    axios
      .get("http://localhost:8000/api/songs/")
      .then(res => this.setState({ songList: res.data }))
      .catch(err => console.log(err));
    axios
      .get("http://localhost:8000/api/ratings/")
      .then(res => this.setState({ ratingList: res.data }))
      .catch(err => console.log(err));
  };

  renderSong = () => {
    return this.state.songList.map(item => (
      <li
        key={item.id} className="items"
      >
        <span>{item.song}</span>
        <button onClick={() => this.editItem(item, "song")} className="btn AA"><EditIcon color="green" fontSize="small"  />Edit Song</button>
        <button onClick={() => this.editItem(item, "rating")} className="btn AA"><StarRateIcon color="green" fontSize="small"/>Rate Song</button>
        <button onClick={() => this.handleDelete(item)} className="btn AA"><DeleteIcon color="green" fontSize="small"/>Delete Song</button>
      </li>
    ));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  toggle2 = () => {
    this.setState({ modal2: !this.state.modal2 });
  };

  createItem = () => {
    const item = { username: this.state.userList[0].id, song: "", genre: "", release_date: null, rating: -1 };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item, n) => {
    for (var i = 0; i < this.state.ratingList.length; i++) {
      if (item.id === this.state.ratingList[i].song) {
        item = { ...item, username: this.state.userList[0].id, rating: this.state.ratingList[i].rating };
      }
    }
    switch(n) {
      case "song":
        if (this.state.modal2) {
          this.setState({ activeItem: item, modal2: !this.state.modal2, modal: !this.state.modal });
        } else {
          this.setState({ activeItem: item, modal: !this.state.modal });
        }
        break;
      case "rating":
        if (this.state.modal) {
          this.setState({ activeItem: item, modal: !this.state.modal, modal2: !this.state.modal2 });
        } else {
          this.setState({ activeItem: item, modal2: !this.state.modal2 });
        }
        break;
      default:
    }
  };

  handleSubmit = (item, n) => {
    switch (n) {
      case "song":
        this.setState({ modal: !this.state.modal });
        if (item.id) {
          axios
            .put(`http://localhost:8000/api/songs/${item.id}/`, item)
            .then(res => this.refreshList());
          return;
        } else {
          axios
            .post("http://localhost:8000/api/songs/", item)
            .then(res => axios
              .post("http://localhost:8000/api/ratings/", {username: item.username, song: res.data.id, rating: item.rating})
              .then(res => this.refreshList())
          );
        }
        break;
      case "rating":
        this.setState({ modal2: !this.state.modal2 });
        for (var i = 0; i < this.state.ratingList.length; i++) {
          if (item.id === this.state.ratingList[i].song) {
            axios
              .put(`http://localhost:8000/api/ratings/${this.state.ratingList[i].id}/`, {username: item.username, song: item.id, rating: item.rating})
              .then(res => this.refreshList());
            return;
          }
        }
        break;
      default:
    }

  };

  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/songs/${item.id}`)
      .then(res => this.refreshList());
  };

  handleSortDropdown = v => {
    switch(v.target.value) {
      case "A":
        this.sortByNameAZ();
        break;
      case 'B':
        this.sortByNameZA();
        break;
      case 'C':
        this.sortByReleaseDateNew();
        break;
      case 'D':
        this.sortByReleaseDateOld();
        break;
      default:
    }
  };
  sortByNameAZ = () => {
    // [2:D, 3:B, 4:E, 5:A, 6:F, 7:C]
    this.state.songList.sort((a, b) => {
      if (a.song < b.song) { return -1; }
      if (a.song > b.song) { return 1; }
      return 0;
    })
    // [5:A, 3:B, 7:C, 2:D, 4:E, 6:F]
    const arr = this.state.songList.map(item => (item.id)); // [5, 3, 7, 2, 4, 6]
    for (var i = 0; i < this.state.songList.length; i++) {
      const first_id = arr.reduce((a, b) => Math.min(a, b));
      arr.splice(arr.indexOf(first_id), 1);
      axios
        .put(`http://localhost:8000/api/songs/${first_id}/`, this.state.songList[i])
        .then(() => this.refreshList())
    }
  };
  sortByNameZA = () => {
    this.state.songList.sort((a, b) => {
      if (a.song < b.song) { return -1; }
      if (a.song > b.song) { return 1; }
      return 0;
    })
    const arr = this.state.songList.map(item => (item.id));
    for (var i = 0; i < this.state.songList.length; i++) {
      const first_id = arr.reduce((a, b) => Math.max(a, b));
      arr.splice(arr.indexOf(first_id), 1);
      axios
        .put(`http://localhost:8000/api/songs/${first_id}/`, this.state.songList[i])
        .then(() => this.refreshList())
    }
  };
  sortByReleaseDateNew = () => {
    this.state.songList.sort((a, b) => {
      if (a.release_date < b.release_date) { return -1; }
      if (a.release_date > b.release_date) { return 1; }
      return 0;
    })
    const arr = this.state.songList.map(item => (item.id));
    for (var i = 0; i < this.state.songList.length; i++) {
      const first_id = arr.reduce((a, b) => Math.max(a, b));
      arr.splice(arr.indexOf(first_id), 1);
      axios
        .put(`http://localhost:8000/api/songs/${first_id}/`, this.state.songList[i])
        .then(() => this.refreshList())
    }
  };
  sortByReleaseDateOld = () => {
    this.state.songList.sort((a, b) => {
      if (a.release_date < b.release_date) { return -1; }
      if (a.release_date > b.release_date) { return 1; }
      return 0;
    })
    const arr = this.state.songList.map(item => (item.id));
    for (var i = 0; i < this.state.songList.length; i++) {
      const first_id = arr.reduce((a, b) => Math.min(a, b));
      arr.splice(arr.indexOf(first_id), 1);
      axios
        .put(`http://localhost:8000/api/songs/${first_id}/`, this.state.songList[i])
        .then(() => this.refreshList())
    }
  };

  render() {
    return (
      <div className="outer-wrap">
        <div className='App'>
          <div className="nav nav-bar">
            <div className="logo">
              <h1>Musify</h1>
            </div>

            <ul>
              <li className="active">
                <button className="btn add-song-btn" onClick={this.createItem}><AddIcon color="green" fontSize="small"  />Add Song</button>
              </li>
            </ul>

            <div className="select">
              <select className="select" onClick={this.handleSortDropdown} onChange={this.handleSortDropdown}>
                <option value="A">Sort by Song Name A-Z</option>
                <option value="B">Sort by Song Name Z-A</option>
                <option value="C">Sort by Release Date New to Old</option>
                <option value="D">Sort by Release Date Old to New</option>
              </select>
            </div>

            <div className="render-song">{this.renderSong()}</div>

          </div>

          <div className="nav upper-nav">
            {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
              />
            ) : null}

            {this.state.modal2 ? (
              <Modal2
                activeItem={this.state.activeItem}
                toggle={this.toggle2}
                onSave={this.handleSubmit}
              />
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default App;











//
