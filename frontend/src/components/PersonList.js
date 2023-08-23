import React from 'react';
import '../styles/PersonList.css';

function PersonList({ Personen }) {
  return (
    <div className="personen-container">
      {Personen.map((person) => (
        <div className="person" key={person.id}>
          <div className="rounded-image">
            <img src={person.bildUrl} alt={person.name} />
          </div>

          <h2 className="name">{person.name}</h2>
          <p className="lebensabschnitt">{person.lebensabschnitt}</p>
        </div>
      ))}
    </div>
  );
}

export default PersonList;