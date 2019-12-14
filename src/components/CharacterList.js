import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const cards = response.data.results;
        setCards([...cards, response.data.results]);
      })
      .catch(err => {
        console.log("Received error: ", err)
      })
  }, []);

  return (
    <section className="character-list">
        {cards.map((card, index) => {
          return (
            <CharacterCard key={index}
              name={card.name}
              status={card.status}
              species={card.species}
            />
          )
        })}
    </section>
  );
}
