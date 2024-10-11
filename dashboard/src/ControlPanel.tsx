import React from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';

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
  const { miniBasket, silverDealBanner, newCarousel } = useFlags();
  const flags = useFlags();

  console.log(flags);

  return (
    <>
      <Feature feature="New Mini Basket" flag={miniBasket} />
      <Feature feature="Additional admin controls" flag={silverDealBanner} />
      <Feature feature="Hero Banner" flag={newCarousel} />
    </>
  );
};

export default ControlPanel;
