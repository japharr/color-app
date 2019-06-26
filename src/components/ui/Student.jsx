import React from "react";

const Student = ({ name, age, onDelete = f => f }) => {
  return (
    <div>
      <dl className="dl-horizontal jh-entity-details">
        <dt>
          <span />
          Name
        </dt>
        <dd>
          <span>{name}</span>
        </dd>
        <dt>
          <span>Age</span>
        </dt>
        <dd>
          <span>{age}</span>
        </dd>
      </dl>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Student;
