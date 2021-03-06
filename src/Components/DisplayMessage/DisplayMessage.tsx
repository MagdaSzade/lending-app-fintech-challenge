import React, {useEffect, useState} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {useAppContext} from '../../hooks/useAppContext';
import {messageContainerStyle, messageStyle, titleStyle, textStyle, closeMessageStyle, xStyle} from './DisplayMessage.styles';

export const DisplayMessage: React.FC = () => {
    const [displayedMessage, setText] = useState({title: '', text: ''});
    const {message, setMessage, lang} = useAppContext();

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage(null);
            }, 10000);
            setText({title: message.title[lang], text: message.message ? message.message[lang] : ''});
        } else {
            setText({title: '', text: ''});
        }
    }, [message, lang, setMessage]);

    const onXClick = () => {
        setMessage(null);
    };

    if (message) {
        return (
            <div id="message" className={messageContainerStyle} onClick={onXClick}>
                <div className={messageStyle}>
                    <div className={closeMessageStyle}>
                        <AiOutlineCloseCircle className={xStyle} />
                    </div>
                    <p className={titleStyle}>{displayedMessage.title}</p>
                    <p className={textStyle}>{displayedMessage.text}</p>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};
