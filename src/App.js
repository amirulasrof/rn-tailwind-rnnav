import React from 'react';

import MainStack from './navigators/MainStack';
import TWProvider from './providers/contexts/TWProvider';

const App = () => {
  return(
    <TWProvider>
      <MainStack />
    </TWProvider>
  )
}

export default App;
