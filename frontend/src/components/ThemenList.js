import React from 'react';
//import '../styles/ThemenList.css'; 

function ThemenList({ Themen }) {
  return (
    <div>
      {Themen.map((Thema) => (
        <div className="container_einzeln" key={Thema.id}>
          <h1 className="titel">{Thema.title}</h1>
          <p className="text">{Thema.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ThemenList;