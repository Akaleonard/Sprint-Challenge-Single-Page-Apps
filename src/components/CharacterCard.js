import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
    </div>
  )
}
