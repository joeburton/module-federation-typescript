import React from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';

const item = {
  border: '1px solid green',
  borderRadius: '4px',
  padding: '0.5rem',
  margin: '10px',
  listStyle: 'none',
};

const uiContainer = {
  border: '1px solid green',
  borderRadius: '4px',
  padding: '3rem',
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
  const {
    miniBasket,
    silverDealBanner,
    newCarousel,
    enableMessage,
    enableNewHeader,
    simpleToggle,
  } = useFlags();
  const flags = useFlags();
  console.log(flags);

  return (
    <>
      <Feature feature="New Mini Basket" flag={miniBasket} />
      <Feature feature="Silver Deal" flag={silverDealBanner} />
      <Feature feature="New Carousel" flag={newCarousel} />
      <Feature feature="Enable Message" flag={enableMessage} />
      <Feature feature="Enable Header" flag={enableNewHeader} />
      <Feature feature="Simple Toggle" flag={simpleToggle} />
      <div style={uiContainer}>
        {miniBasket && <>Mini Basket - Display controlled via feature flag</>}
      </div>
    </>
  );
};

export default ControlPanel;
