
import './App.css';

import SearchSection  from './sections/search';
import ReplySection from './sections/reply';
import { useState } from 'react';
import GetKey from './sections/GetKey';

export default function App() {
  const [pageState, setPageState] = useState("nokey");
  const [dataState, setDataState] = useState([]); // sample:[{prompt: "", list: []}, {prompt: "", list: []}]
  const [topic, setTopic] = useState(""); // sample:[{prompt: "", list: []}, {prompt: "", list: []}]
  const [aiKey, setAiKey] = useState("");


  return (
    <div className="App">
      <div className='MainBackground'></div>
      <div className='Content'>
        {pageState === "nokey" ?
          <GetKey setAiKey={setAiKey} setPageState={setPageState} />
        :
          <> 
            <SearchSection dataState={dataState} setDataState={setDataState} setTopic={setTopic}/>
            <ReplySection dataState={dataState} setDataState={setDataState} setPageState={setPageState} topic={topic}/>
          </>
        }
      </div>
    </div>
  );
}
