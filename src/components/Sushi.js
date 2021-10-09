import React, { useState } from 'react'


function Sushi({ sushi, eatSushi, budget }) {
  const [eaten, setEaten] = useState(false)

  function handleEatenClick(){
    if(budget - sushi.price >= 0 && !eaten){
      setEaten(!eaten)
      eatSushi(sushi)
    }
  }
 

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatenClick}>
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
