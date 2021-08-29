import React, { useState } from "react";

const Form = ({ saveSearchLetter }) => {
  const [search, saveSearch] = useState({
    artist: "",
    song: "",
  });
  const [error, saveError] = useState(false);
  const { artist, song } = search;

  const updateSearch = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const searchInformation = (e) => {
    e.preventDefault();

    if (song.trim() === "" || artist.trim() === "") {
      saveError(true);
      return;
    }

    saveError(false);
    saveSearchLetter(search)
  };

  return (
    <div className="bg-info">
      <div className="container">
        {error && (
          <p className="alert alert-danger text-center p-2">
            All fields are required!
          </p>
        )}

        <div className="row">
          <form
            onSubmit={searchInformation}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Search letters songs</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      type="text"
                      name="artist"
                      placeholder="Artist"
                      className="form-control"
                      onChange={updateSearch}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      type="text"
                      name="song"
                      placeholder="Song"
                      className="form-control"
                      onChange={updateSearch}
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary float-right">Search</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
