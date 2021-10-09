import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({ sushiList, eatSushi, budget }) {
  const [currDisplayID, setCurrDisplayID]= useState([1, 4])

  function handleMoreClick(){
    let newIDs = [currDisplayID[0]+4, currDisplayID[1]+4]
    setCurrDisplayID(newIDs)
  }
   
  
  return (
    <div className="belt">
      {sushiList.filter(sushi => sushi.id >= currDisplayID[0] && sushi.id <= currDisplayID[1]).map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} budget={budget} />)}

      <MoreButton handleClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
