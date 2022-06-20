import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ApiCall from "../utils/ApiCall";

const Cats = () => {
  const [cat, setCat] = useState({
    currentPage: ""
  });

  const [kittens, setKittens] = useState([]);
  useEffect(() => {
    async function fetchCats() {
      const {ourResult, currentPage } = await ApiCall(100);
      setCat({ currentPage });
      setKittens(ourResult);
    }
    fetchCats();
  }, []);
  const nextPage = async () => {
    const { currentPage } = cat;
    
    const {ourResult } = await ApiCall(parseInt(currentPage) + 1);
    setCat({ currentPage: parseInt(currentPage) + 1 });
    setKittens(ourResult);
  };
  const threeKittens = () => {
    return kittens.map(({url}, index) => {
      return <img key={index} className="catImg" src={url} alt="" />
    })
  }
  return (
    <div>
      {kittens.length ? threeKittens() : <Loading />}
      <br/>
      <button onClick={nextPage}>Next page</button>
    </div>
  );
};

export default Cats;
