import React from 'react';
import './reply.css'

export const SearchSection = () => {

    return (
        <section className='searchBackground'>
            <div className='searchSection'>
                <form>
                    <label>
                        I want to learn:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    )
}