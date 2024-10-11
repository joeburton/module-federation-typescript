import React from 'react';
import ReactDOM from 'react-dom/client';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

import App from './App';

(async () => {
  // Initialize the LaunchDarkly provider asynchronously
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '6706972120d9af0861ab5b8f',
    context: {
      kind: 'user',
      key: 'user-key-123abc', // Replace with actual user key
      name: 'Sandy Smith', // Replace with dynamic user data
      email: 'sandy@example.com',
    },
    options: {
      // Optional: Provide additional options like event streaming configurations, etc.
    },
  });

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
  );

  root.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
  );
})();
