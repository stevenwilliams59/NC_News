import React from 'react';

export default function Title({ userName }) {
  return (
    <>
      <h1 className="header">reddit</h1>
      <br></br>
      <h4>Hey {userName}</h4>
    </>
  );
}
