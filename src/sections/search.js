import React, { useState } from 'react';
import './search.css'

// import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

var chatGPT = require('../util/chatGPT');

// export class SearchSection extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { gptQuery: "" };

//     }


//     render() {
//         return (
//             <section className='searchBackground'>
//                 <div className='searchSection'>
//                     <form>
//                         <label>
//                             I want to learn:
//                             <input type="text" name="GPTquery" />
//                         </label>
//                         <input type="submit" value="Submit" />
//                     </form>
//                 </div>
//             </section>
//         )
//     }
// }

export default function SearchSection({setDataState, setTopic}) {

    const [gptQuery, setgptQuery] = useState("");

    const [validinput, setvalidinput] = useState("");

    const callback = r => {

        console.log(gptQuery)
        //remove loading spinner
        /// Do stuff with response HERE
        var result = r;
        //add react obj to screen

        console.log(result)
        // setDataState(dataState => [...dataState, result])
        setDataState(dataState => [result])
    }

    function handleSubmit(e) {
        console.log("handle sub 1")

        e.preventDefault();
        setgptQuery(e.target[0].value)
        chatGPT.getLesson(callback, e.target[0].value)
        setTopic(e.target[0].value);
        console.log("handle sub 2")

        setDataState([])
    }

    // /^[a-zA-Z' ]+$/
    function onChangeTagInput(e) {
        if (e.target.value.match("^[a-zA-Z' ]*$") != null) {
            setvalidinput(e.target.value);
        }
    }


    console.log("end initial")

    return (
        <section className='searchBackground'>
            <div className='searchSection'>
                <link rel="stylesheet" href="../../font-awesome/css/font-awesome.min.css" />

                {/* <form onSubmit={e => handleSubmit(e)}>
                    <label>
                        I want to teach:
                        <input type="text" name="GPTquery" />
                    </label>
                    <input type="submit" value="Submit" />
                </form> */}

                <div className="searchbox">
                    <form name="search" onSubmit={e => handleSubmit(e)} autoComplete="off" action="...">
                        <label className='searchText'>
                            I want to teach:
                            <input type="text" value={validinput} className="searchinput" name="GPTquery" onChange={(e) => onChangeTagInput(e)} />
                            {/* onMouseOut="this.value = ''; this.blur();" */}
                        </label>
                    </form>
                    {/* <i className="fas fa-search"></i> */}
                    <FontAwesomeIcon icon={faSearch} className="icon" />

                </div>



                {/* <p>{gptQuery}</p> */}
            </div>
        </section>
    )
}