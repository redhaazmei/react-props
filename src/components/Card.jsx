import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src="https://picsum.photos/400" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="/" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const createCard = (props) => {
  return <Card key={props.id} title={props.title} text={props.text} />;
};

export { Card, createCard };
