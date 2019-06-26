import React from "react";

const Student = ({ name, age }) => {
  return (
    <div>
      <dl className="dl-horizontal jh-entity-details">
        <dt>
          <span />Name
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
    </div>
  );
};

export default Student;
