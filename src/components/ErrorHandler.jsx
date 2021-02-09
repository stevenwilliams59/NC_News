import React from 'react';

export default function ErrorHandler({ msg }) {
  return <h2>{msg ? msg : 'Page not found'}</h2>;
}
