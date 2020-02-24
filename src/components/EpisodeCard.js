import React from "react";

function LocationCard(props) {
  return (
    <div>
      {props.episode.map(place => (
        <h1>{place.name}</h1>
      ))}
    </div>
  );
}

export default LocationCard;
