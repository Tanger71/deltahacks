import React from 'react';
import { getLesson } from '../util/chatGPT'; 
import './reply.css'

export default function ReplySection({dataState, setDataState, setPageState}){

    const callback = r => {
        console.log("callb");
        var result = r;
        console.log(result);
        setDataState(dataState => [...dataState, result]);
    }

    return (
        <section className='replyBackground'>
            <div className='replySection'>
                {dataState.map((data, index) => (
                    <div key={index}>
                        <>{data.prompt}</>
                        {data.list.map((dataString, index) => (
                            <div key={index} onClick={() => getLesson(callback, dataString)} >{dataString}</div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}