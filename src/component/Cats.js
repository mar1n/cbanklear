import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const Cats = () => {
  const [cat, setCat] = useState({
    url: "",
  });
  useEffect(() => {
    console.log("useeffect is in this componenet");
    async function fetchCats() {
      const { data: ourResult } = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          headers: {
            "x-api-key": "972da10d-ef46-4937-9b57-6aca9a67fae0",
          },
        }
      );
      const [result] = ourResult;
      const {url} = result;
      setCat({ url });
    }
    fetchCats();
  }, []);
  const {url } = cat;
  return <div>{url ? <img className="catImg" src={url} alt="" /> : <Loading />}</div>;
};

export default Cats;
