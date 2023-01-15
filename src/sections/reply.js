import React, { useEffect, useRef } from 'react';
import './reply.css'

import { Fade } from "react-awesome-reveal";
// import { fontFamily } from '@mui/system';

// import { getStep } from '../util/chatGPT';
// const functions = require('../util/chatGPT');
// let { getStep } = functions

const { getStep } = require('../util/chatGPT');


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
                            {index === 0 ?
                                <p className='qHead'>How do I teach {topic}?</p>
                                :
                                <p className='qHead'>{topic}: more...</p>
                            }
                            <ul className='replyObjList'>
                                {data.list.map((dataString, index) => (
                                    <Fade direction='up' cascade delay={500 + index * 250} triggerOnce={true}>
                                        <li className='replySingleText' key={(1 + index) * 10} onClick={() => getStep(callback, topic, dataString)} >
                                            {dataString}
                                        </li>
                                    </Fade>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
        </section>
    )
}