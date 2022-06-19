import React, { useState, useEffect} from "react";
import axios from "axios"

const Cats = () => {
    useEffect(() => {
        console.log('useeffect is in this componenet')
        async function fetchCats() {
            const axioResult = await axios.get("https://api.thecatapi.com/v1/breeds/search?q=sib");
            console.log('axios', axioResult);
        }
        fetchCats();
    })
}

export default Cats;