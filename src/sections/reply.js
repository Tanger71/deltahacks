import React, { useEffect, useRef } from 'react';
import { getStep } from '../util/chatGPT';
import './reply.css'

import { Fade } from "react-awesome-reveal";
import { fontFamily } from '@mui/system';

export default function ReplySection({ dataState, setDataState, setPageState, topic }) {

    const messageRef = useRef();

    const callback = r => {
        console.log("callb");
        var result = r;
        console.log(result);
        setDataState(dataState => [...dataState, result]);
    }


    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                })
        }
    }, [dataState])



    return (
        <section className='replyBackground'>
            <div className='replySection'>
                {dataState.map((data, index) => (
                    <div key={index + 1} className='replyStep' ref={messageRef}>
                        {/* <>{data.prompt}</> */}
                        <p style={{fontFamily:"Comic Sans MS"}}>Query {index + 1} </p>
                        {data.list.map((dataString, index) => (
                            <Fade direction='up' cascade delay={500 + index * 250} triggerOnce={true}>
                                <div className='replySingleText' key={(1 + index) * 10} onClick={() => getStep(callback, topic, dataString)} >
                                    {dataString}
                                </div>
                            </Fade>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}