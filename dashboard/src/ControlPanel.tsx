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
  color: '#000',
  borderRadius: '4px',
  padding: '2rem',
  margin: '10px',
  listStyle: 'none',
};

const bgGreen = {
  backgroundColor: 'green',
  padding: '0.5rem',
  color: 'white',
};

const bgRed = {
  backgroundColor: 'red',
  padding: '0.5rem',
  color: 'white',
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
    rollingOffer,
    springLaunch,
  } = useFlags();
  const flags = useFlags();

  console.log(flags);
  console.log('rollingOffer: ', rollingOffer);
  console.log('springLaunch: ', springLaunch);

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
      <div style={uiContainer}>
        {rollingOffer ? (
          <div style={bgGreen}>Rolling Offer: Only active for the UK</div>
        ) : (
          <div style={bgRed}>Rolling Offer: Inactive for the DE and FR</div>
        )}
      </div>
      <div style={uiContainer}>
        {springLaunch && (
          <>
            <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
              <li style={{ padding: '1rem' }}>
                DE:{' '}
                {springLaunch.country === 'DE' && springLaunch.active ? (
                  <span style={bgGreen}>Enabled</span>
                ) : (
                  <span style={bgRed}>Disabled</span>
                )}
              </li>
              <li style={{ padding: '1rem' }}>
                GB:{' '}
                {springLaunch.country === 'GB' && springLaunch.active ? (
                  <span style={bgGreen}>Enabled</span>
                ) : (
                  <span style={bgRed}>Disabled</span>
                )}
              </li>
              <li style={{ padding: '1rem' }}>
                FR:{' '}
                {springLaunch.country === 'FR' && springLaunch.active ? (
                  <span style={bgGreen}>Enabled</span>
                ) : (
                  <span style={bgRed}>Disabled</span>
                )}
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default ControlPanel;
