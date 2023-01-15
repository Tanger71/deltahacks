import React from 'react';
// import { useState } from 'react';
import './search.css';

// import { setToken } from '../util/chatGPT';
const functions = require('../util/chatGPT');
let { setToken } = functions

export default function GetKey({setAiKey, setPageState}){

    function handleSubmit(e){
        console.log("wfgqwefWF  wf");
        e.preventDefault();
        if (e.target[0].value){
            setAiKey(e.target[0].value);
            setToken(e.target[0].value);
            setPageState("search");
            console.log("boop");
        }
        
    }

    return (
        <div className="searchbox searchSection">
            <form name="search" onSubmit={e => handleSubmit(e)}>
                <label className='searchText'>
                    Enter OpenAI key: 
                    <br/>
                    <input type="text" className="searchinput" style={{marginTop: "10px"}} />
                </label>
            </form>
         </div>
    );}