import React from 'react';
import {useSelector} from 'react-redux';

function App() {
    const somethig = useSelector(state => state.example.data[0].data);

    return (
        <div>
            <h3> 3333{somethig} </h3>
        </div>
    );
}

export default App;
