import React from 'react';
import { useState } from 'react';
import './search.css';
import { setToken } from '../util/chatGPT';

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
                    Enter OpenAI private key: 
                    <br/>
                    <input type="text" className="searchinput" />
                </label>
            </form>
         </div>
    );}