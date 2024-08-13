import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Create from './Create';
import WatchList from './WatchList';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='m-2 h-[200vh]'>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Routes>
                    <Route path="/" element={<Body searchTerm={searchTerm} />} />
                    <Route path='/create' element={<Create />} />
                    <Route path="/watchList" element={<WatchList />} />
                </Routes>
        </div>
    );
};

export default App;
