import React, { useState } from 'react';
import AppStateContext from './AppStateContext';

function AppStateProvider(props) {
  const [state, setState] = useState({
    // your app-wide state goes here
  });

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {props.children}
    </AppStateContext.Provider>
  );
}

export default AppStateProvider;