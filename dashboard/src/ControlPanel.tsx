import React from 'react';

const item = {
  border: '1px solid green',
  borderRadius: '4px',
  padding: '0.5rem',
  margin: '10px',
  listStyle: 'none',
};

const Feature = ({ feature, flag }: { feature: string; flag: boolean }) => {
  return (
    <div style={item}>
      Feature: {feature} -
      {flag ? (
        <span style={{ color: 'green' }}> [Enabled]</span>
      ) : (
        <span style={{ color: 'red' }}> [Disabled]</span>
      )}
    </div>
  );
};

const ControlPanel = () => {
  return (
    <>
      <Feature feature="New Mini Basket" flag={true} />
      <Feature feature="Additional admin controls" flag={false} />
      <Feature feature="Hero Banner" flag={true} />
    </>
  );
};

export default ControlPanel;
