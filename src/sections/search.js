import React , { useState }from 'react';
import './search.css'

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

export default function SearchSection() {

    const [gptQuery, setgptQuery] = useState("swim");

    const callback = r => {

        console.log("callb")
        //remove loading spinner
        /// Do stuff with response HERE
        var result = r;
        //add react obj to screen

        console.log(result)
    }
    
    function handleSubmit(e) {
        console.log("handle sub 1")

        e.preventDefault();
        setgptQuery(e.target[0].value)
        chatGPT.getLesson(callback, e.target[0].value)

        console.log("handle sub 2")
    }
    
    console.log("end initial")

    return (
        <section className='searchBackground'>
            <div className='searchSection'>
                {/* <form onSubmit={e => handleSubmit(e)}> */}
                <form onSubmit={ e => handleSubmit(e)}>
                    <label>
                        I want to teach:
                        <input type="text" name="GPTquery"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <p>{gptQuery}</p>
            </div>
        </section>
    )
}