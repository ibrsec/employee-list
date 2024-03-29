import { useContext, useEffect, useState } from "react";
import ProfilCard from "./components/card/ProfilCard";
import Cards from "./components/cards/Cards";
import Content from "./components/content/Content.jsx";
import Header from "./components/header/Header.jsx";
import Buttons from "./components/buttons/Buttons.jsx";

import data from "./helper/data.jsx";

function App() {
  const [page, setPage] = useState(1);
  const [datam, setDatam] = useState(data);
 
  const numberOfScreenedProfile = 5;
  const totalPage = data.length / numberOfScreenedProfile;

  const indexOfFirstProfil = (data.length / totalPage) * (page - 1);
  const indexOfLastProfil = indexOfFirstProfil + numberOfScreenedProfile;

  const handleClick = (e) => {
    if (e.target.id == "next" && page < totalPage) {
      setPage(page + 1);
    } else if (e.target.id == "prev" && page > 1) {
      setPage(page - 1);
    }
  };
useEffect(()=>{

  setDatam(
    data.slice(indexOfFirstProfil,indexOfLastProfil)
  );
},[page])


 

  return (
    <div className="App">
      <Content>
        <Header first={indexOfFirstProfil} last={indexOfLastProfil} />

        <Cards>
          {datam.map((item) => (
            <ProfilCard key={item.id} nextProfil={item} />
          ))}
        </Cards>
        <Buttons onClick={handleClick} />
      </Content>
    </div>
  );
}

export default App;
