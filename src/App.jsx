import React from 'react';
import colors from './constants/colors';

function App() {
  return (
 <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: colors.ivory }}
    >
      <p
        className="text-xl font-semibold shadow-lg p-4 rounded"
        style={{
          color: colors.eucalyptus,
          backgroundColor: colors.olive,
        }}
      >
        Hello world test
      </p>
    </div>
  );
}

export default App;
