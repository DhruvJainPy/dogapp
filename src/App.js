import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [breed, setBreed] = useState("");
  const [img, setImg] = useState([]);
  const handleClick = async () => {
    const url = `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/`;
    await axios
      .get(url)
      .then((data) => {
        setImg(data.data.message);
      })
      .catch((err) => console.log(err));
    setBreed("");
  };
  return (
    <div className="container-fluid">
      <div className="row p-3">
        <p className="p-3 p-md-5 display-5 text-center">
          Welcome To Dogzilla!
          <span className="h4 text-center d-block mt-3 text-black-50">
            Get Image for any Dog Breed
          </span>
        </p>
      </div>
      <div className="row col-md-8 offset-md-2">
        <div className="input-group mb-3 shadow-lg">
          <input
            type="text"
            className="form-control border-dark border border-2"
            placeholder="Search Dog Breed..."
            value={breed}
            onChange={(evt) => setBreed(evt.target.value)}
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-dark border-dark border border-2 border-start-0 p-2"
            type="button"
            id="button-addon2"
            onClick={handleClick}
          >
            Search Breed
          </button>
        </div>
      </div>
      <div className="row mt-3 mt-md-4">
        {img.length !== 0 &&
          img.map((image) => {
            return (
              <div className="col-md-4 my-3 my-md-4" key={image}>
                {/* eslint-disable-next-line */}
                <img src={image} alt="No Image" className="img-fluid" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
