<div className="outer-wrap">
  <div className="App">
    <div className="nav nav-bar">
      <div className="logo">
        <h1>Musify</h1>
      </div>
      <ul>
        <li className="active">
          <button className="btn add-song-btn" onClick={this.createItem}><AddIcon color="green" fontSize="small"/>Add Song</button>
        </li>
      </ul>

      <div className="select">
        <select className="select" onClick={this.handleSortDropdown} onChange={this.handleSortDropdown}>
          <option value="A">Sort by Song Name A-Z</option>
          <option value="B">Sort by Song Name Z-A</option>
          <option value="C">Sort by Release Date New</option>
          <option value="D">Sort by Release Date Old</option>
        </select>
      </div>
      <div className="render-song">{this.renderSong()}</div>

    </div>

    <div className="nav upper-nav">
      <div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </div>
      <div>
        {this.state.modal ? (
          <Modal2
            activeItem={this.state.activeItem}
            toggle={this.toggle2}
            onSave={this.handleSubmit}
          />
        ) : null}
      </div>
    </div>
  </div>
</div>
)
}
}
