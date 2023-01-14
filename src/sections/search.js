import React from 'react';
import './search.css'

export class SearchSection extends React.Component {
    render() {
        return (
            <section className='searchBackground'>
                <div className='searchSection'>
                    <form>
                        <label>
                            I want to learn:
                            <input type="text" name="GPTquery" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>
        )
    }
}

// export const SearchSection = () => {

//     return (
//         <section className='searchBackground'>
//             <div className='searchSection'>
//                 <form>
//                     <label>
//                         I want to learn:
//                         <input type="text" name="GPTquery" />
//                     </label>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         </section>
//     )
// }