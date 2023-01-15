import React from 'react';
import './reply.css'

export default function ReplySection({dataState, setPageState}){

    return (
        <section className='replyBackground'>
            <div className='replySection'>
                {dataState.map((data, index) => (
                    <div key={index}>
                        <>{data.prompt}</>
                        {data.list.map((dataString, index) => (
                            <div key={index}>{dataString}</div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}