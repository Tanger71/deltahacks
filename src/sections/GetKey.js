import React from 'react';
import { useState } from 'react';
import { setToken } from '../util/chatGPT';
import './reply.css';

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
        <div className="searchbox">
            <form name="search" onSubmit={e => handleSubmit(e)}>
                <label className='searchText'>
                    Enter OpenAI private key:
                    <input type="text" className="searchinput" />
                </label>
            </form>
         </div>
    );}