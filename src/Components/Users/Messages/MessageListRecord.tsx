import React, {useEffect, useState, memo} from 'react';
import {UserMessageInterface} from '../../../helpers/types';
import {BiEnvelopeOpen} from 'react-icons/bi';
import {recordStyle, dateStyle, displayNoneStyle, displayBlockStyle, toUpperCaseStyle, shrinkStyle} from './MessageList.styles';
import {usePushToHistory} from '../../../hooks/usePushToHistory';
import {ROUTES} from '../../../helpers/ROUTES';
import {cx} from 'emotion';

export const MessageListRecord: React.FC<UserMessageInterface> = memo(({hasBeenRead, title, message, date, ID}) => {
    const [displayMessage, setDisplayMessage] = useState(false);
    const [detailsStyle, setDetailStyle] = useState(displayNoneStyle);
    const pushToHistory = usePushToHistory();

    useEffect(() => {
        displayMessage ? setDetailStyle(displayBlockStyle) : setDetailStyle(displayNoneStyle);
    }, [displayMessage]);

    const onRecordClick = () => {
        !displayMessage ? pushToHistory(ROUTES.USER_MESSAGES + `/${ID}`) : pushToHistory(ROUTES.USER_MESSAGES);
        setDisplayMessage(state => !state);
    };

    return (
        <li className={recordStyle} onClick={onRecordClick}>
            <div>
                <BiEnvelopeOpen size="3rem" />
            </div>
            <div className={dateStyle}>
                <p>{date}</p>
            </div>
            <div className={cx(toUpperCaseStyle, shrinkStyle)}>{title}</div>
            <div className={detailsStyle}>
                <div className={toUpperCaseStyle}>{title}</div>
                <div className={dateStyle}>
                    <p>{date}</p>
                </div>
                <div>{message}</div>
            </div>
        </li>
    );
});
