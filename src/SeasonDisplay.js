import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer : {
        text: "Let's hit the beach!",
        iconClass: "sun",
    },
    winter : {
        text: "Burr, it's chilly!",
        iconClass: "snowflake",
    }
}
const getSeason = (lat, month) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }

    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay= (props) => {
    
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, iconClass } = seasonConfig[season]

    return (
        <div className = {`season-display ${ season }`}>
           <i className = { `icon-left massive ${iconClass} icon` }></i>
           <h1> { text } </h1> 
           <i className = {`icon-right massive ${iconClass} icon`}></i>
        </div>
    );
};
export default SeasonDisplay;