export default function SingleCat({ name, latinName, Image, setCats }) {
  function deleteCat() {
    setCats((originCats) => originCats.filter((cats) => cats.name != name));
  }
  return (
    <li>
      <img src={Image} alt="" width="500px" />
      <h3>{name}</h3>
      <h4>{latinName}</h4>
      <button onClick={deleteCat}>Delete</button>
    </li>
  );
}
