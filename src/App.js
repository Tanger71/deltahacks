
import './App.css';

import SearchSection from './sections/search';
import { ReplySection } from './sections/reply';

function App() {
  return (
    <div className="App">
      <div className='Content'>
        <SearchSection />
        <ReplySection />
      </div>
    </div>
  );
}

export default App;
