import * as React from 'react';

// React.lazy only supports Default exports.
const RemoteCounter = React.lazy(() => import('container/Counter'));

const Button = React.lazy(() => import('container/Button'));

// import Button from 'container/Button';

const App = () => {
  const [count, setCount] = React.useState(456);

  return (
    <div>
      <h1>Typescript</h1>
      <h2>Host</h2>
      <React.Suspense fallback='Loading remote component'>
        <RemoteCounter counter={count} onIncrease={() => setCount(count + 1)} />
        <Button text='Button Instance' />
      </React.Suspense>
    </div>
  );
};

export default App;
