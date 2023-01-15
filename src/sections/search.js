import React , { useState }from 'react';
import './search.css'

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

    const [gptQuery, setgptQuery] = useState("");

    function handleSubmit(e) {
        console.log(e.target[0].value);
        e.preventDefault();
    }

    return (
        <section className='searchBackground'>
            <div className='searchSection'>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <label>
                        I want to teach:
                        <input type="text" name="GPTquery" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <p>{gptQuery}</p>

            </div>
        </section>
    )
}