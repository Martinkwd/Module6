import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [Image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    onAddCat(Object.fromEntries(data));
    // onAddCat({ name, latinName, Image });
  };
  return (
    <div className="AddCatFrom componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Latin name:
          <input
            name="latinName"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
        <label>
          URL image:
          <input
            name="Image"
            value={Image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button>Add Cat</button>
      </form>
    </div>
  );
}

export default AddCatForm;
