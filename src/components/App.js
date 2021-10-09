import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


const API = "http://localhost:3001/sushis";


function App() {
  const [sushiList, setSushiList] = useState()
  const [budget, setBudget] = useState(50)
  

  useEffect(() => {
   fetch(API)
   .then(res => res.json())
   .then(sushiData => {
    setSushiList(sushiData.map(sushi => {
      return {...sushi, eaten: false}
    })
    )
   })
  }, [])
  function eatSushi(eatenSushi){
    if(budget- eatenSushi.price >= 0){
      setBudget(budget - eatenSushi.price)
    }
    const updatedSushi = sushiList.map(sushi =>{
      if(sushi.id === eatenSushi.id){
        return {...sushi, eaten: true}
      }else{
        return sushi
      }
    })
    setSushiList(updatedSushi)
  }

  


  return (
    <div className="app">
      {sushiList ? <SushiContainer sushiList={sushiList} eatSushi={eatSushi} budget={budget} /> : <h2>Loading Sushi Bar...</h2>}
      <Table budget={budget} plates={plates} />
    </div>
  );
}

export default App;
