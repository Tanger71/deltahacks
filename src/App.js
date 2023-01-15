
import './App.css';

import SearchSection  from './sections/search';
import ReplySection from './sections/reply';
import { useState } from 'react';

export default function App() {
  const [pageState, setPageState] = useState("go");
  const [dataState, setDataState] = useState([{
    prompt: 'How would I teach someone to play league in steps?',
    list: [
      '1. Download and install League of Legends from the official website.',
      '2. Create a League of Legends account and log in.',
      '3. Explore the various game modes, including the tutorial.',
      '4. Play some practice matches to get acquainted with the game.',
      '5. Join a game with a group of friends.',
      '6. Learn about the different roles each champion has in the game.',
      '7. Practice and hone your skills by playing more matches.',
      '8. Experiment with different strategies to understand how to play the game better.',
      '9. Join a ranked game and compete with other players.',
      '10. Have fun and keep learning!'
    ]
  }, {
    prompt: 'How would I teach someone to play league in steps?',
    list: [
      '1. Download and install League of Legends from the official website.',
      '2. Create a League of Legends account and log in.',
      '3. Explore the various game modes, including the tutorial.',
      '4. Play some practice matches to get acquainted with the game.',
      '5. Join a game with a group of friends.',
      '6. Learn about the different roles each champion has in the game.',
      '7. Practice and hone your skills by playing more matches.',
      '8. Experiment with different strategies to understand how to play the game better.',
      '9. Join a ranked game and compete with other players.',
      '10. Have fun and keep learning!'
    ]
  }]); // sample:[{prompt: "", list: []}, {prompt: "", list: []}]

  return (
    <div className="App">
      <div className='Content'>
        <SearchSection />
        <ReplySection dataState={dataState} setPageState={setPageState}/>
      </div>
    </div>
  );
}
