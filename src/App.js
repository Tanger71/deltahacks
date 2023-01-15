
import './App.css';

import SearchSection  from './sections/search';
import ReplySection from './sections/reply';
import { useState } from 'react';

export default function App() {
  const [pageState, setPageState] = useState("go");
  const [dataState, setDataState] = useState([]); // sample:[{prompt: "", list: []}, {prompt: "", list: []}]
  

  return (
    <div className="App">
      <div className='Content'>
        <SearchSection dataState={dataState} setDataState={setDataState}/>
        <ReplySection dataState={dataState} setDataState={setDataState} setPageState={setPageState}/>
      </div>
    </div>
  );
}
