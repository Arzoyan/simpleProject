import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const somethig = useSelector(state => { state.something });

  return (
    <div >

    </div>
  );
}

export default App;
