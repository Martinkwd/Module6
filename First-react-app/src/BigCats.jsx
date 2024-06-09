import { useState } from "react";
import SingleCat from "./singleCats";
import AddCatForm from "./AddCatFrom";

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    Image:
      "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQrrJvI755NtgjcJ4eAuFFBiUq7CCW9Z7GNG5SeOAxegJ7f2IJE--tQEDf8Fs2sXEP2",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    Image:
      "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSuGym7v1UG5xw9V89YOFsPWCYO3HAhqKdxENxriOdMnR6NTqk_k3zsC0OxQR6PpTna",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    Image:
      "https://cdn.britannica.com/09/143609-050-826EA62F/Jaguar-stream-Brazil.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    Image:
      "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQlFaw8c-v--AjHgh_yRQ1Qh73WayHn_kGSsyc2ifxnuY_n-2Hmo75zDm8K1REv0h66",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    Image:
      "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJpevBOQMgZ-Gaeb54y2Tin-o5vsoOtYW2nYtCpzkYqtj6ENWsHD4d1Bv-AUymOggA",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    Image:
      "https://cdn.britannica.com/52/170952-050-A545E35D/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    Image:
      "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTxmgcsH49waqyPXZFtbjPyaWnU_AkwBhWsZmucrTSVPtcpnJDEpnnOg3XotJTVrva4",
  },
];

//Exercise 2
// export default function BigCats() {
//   const catsItem = cats.map((cat) => (
//     <SingleCat
//       key={cat.id}
//       name={cat.name}
//       latinName={cat.latinName}
//       Image={cat.Image}
//     ></SingleCat>
//   ));

//   return <ul>{catsItem}</ul>;
// }

//Exercise 4
export default function BigCats() {
  const [currentCats, setCurrentCats] = useState(cats);
  const catsItem = currentCats.map((cat) => (
    <SingleCat
      key={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      Image={cat.Image}
      setCats={setCurrentCats}
    ></SingleCat>
  ));

  const handleSortCats = () => {
    let newCats = [...currentCats];
    newCats.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setCurrentCats(newCats);
  };

  const handleSortCatsza = () => {
    let newCats = [...currentCats];
    newCats.sort(function (a, b) {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
    setCurrentCats(newCats);
  };
  const handleFilterCats = () => {
    let newCats = currentCats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setCurrentCats(newCats);
  };

  const handleResetCats = () => {
    setCurrentCats(cats);
  };

  //Exercise 5
  const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1;
    setCurrentCats([...currentCats, newCat]);
  };

  //delete
  // const deleteCat = () => {}
  return (
    <>
      <ul>{catsItem}</ul>
      <button onClick={handleSortCats}>Sort A-Z</button>
      <button onClick={handleSortCatsza}>Sort Z-A</button>
      <button onClick={handleFilterCats}>Filter by Panthera</button>
      <button onClick={handleResetCats}>Reset</button>
      <AddCatForm onAddCat={handleAddCat} />;
    </>
  );
}
