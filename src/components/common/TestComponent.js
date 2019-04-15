import React from 'react';

const TestComponent = ({ demoData }) => (
  <>
    DEMO COMPONENT
    <pre>{JSON.stringify(demoData, null, 2)}</pre>
  </>
);

export default TestComponent;
