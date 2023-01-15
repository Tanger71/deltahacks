import React from 'react';
import { useState } from 'react';
import './search.css';
import { ApiKey } from '../ApiKey';

export default function GetKey({setPageState}){

    function handleSubmit(e){
        if (e.target[0].value){
            ApiKey.setmyKey(e.target[0].value);
            setPageState("search");
            console.log("boop");
        }
    }

    return (
        <div className="searchbox searchSection">
            <form name="search" onSubmit={e => handleSubmit(e)}>
                <label className='searchText'>
                    Enter OpenAI private key:<br/>
                    <input type="text" className="searchinput" />
                </label>
            </form>
         </div>
    );}