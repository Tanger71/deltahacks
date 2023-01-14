
import './App.css';

import SearchSection  from './sections/search';
import ReplySection from './sections/reply';
import { useState } from 'react';

export default function App() {
  const [pageState, setPageState] = useState();
  const [dataState, setDataState] = useState({});

  return (
    <div className="App">
      <div className='Content'>
        <SearchSection />
        <ReplySection />
      </div>
    </div>
  );
}
