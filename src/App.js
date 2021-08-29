import { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import axios from "axios";

function App() {
  const [searchLetter, saveSearchLetter] = useState({});

  const consultLetter = async () => {
    const { artist, song } = searchLetter;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    const result = await axios(url);

    console.log(result);
  };

  useEffect(() => {
    if (Object.keys(searchLetter).length === 0) return;

    consultLetter();
  }, [searchLetter]);

  return (
    <Fragment>
      <Form saveSearchLetter={saveSearchLetter} />
    </Fragment>
  );
}

export default App;
