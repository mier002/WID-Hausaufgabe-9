import React from 'react';
import ReactDOM from 'react-dom';
import { Vega } from 'react-vega';
import spec from "../../Binning.json"


async function fetchQuakeData(url) {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`Error fetching data from ${url}`);
      }
      const data = await resp.json();
      setQuakesJson(data.features);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const url = `${BASE_URL}/${minMag}_${timespan}.geojson`;
    fetchQuakeData(url);
  }, [minMag, timespan]);



  
  const barData = {
    table: [
        { category: "A", amount: 28 },
        { category: "B", amount: 55 },
        { category: "C", amount: 43 },
        { category: "D", amount: 91 },
        { category: "E", amount: 81 },
        { category: "F", amount: 53 },
        { category: "G", amount: 19 },
        { category: "H", amount: 87 },
      ]
  };
  
  function handleHover(...args){
    console.log(args);
  }

  const signalListeners = { hover: handleHover };

function VegaCompo() {
  return(
  <><Vega spec={spec} data={barData} signalListeners={signalListeners} />
  <p>Hello</p></>
)}

export default VegaCompo;
