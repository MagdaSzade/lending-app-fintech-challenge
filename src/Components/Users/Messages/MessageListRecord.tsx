import React, {useEffect, useState, memo} from 'react';
import {UserMessageInterface} from '../../../helpers/types';
import {BiEnvelope, BiEnvelopeOpen} from 'react-icons/bi';
import {recordStyle, dateStyle, displayNoneStyle, displayBlockStyle, toUpperCaseStyle, shrinkStyle} from './MessageList.styles';
import {dateDisplay} from './MessageList.helpers';
import {useMessageActions} from '../../../hooks/useMessageActions';
import {usePushToHistory} from '../../../hooks/usePushToHistory';
import {ROUTES} from '../../../helpers/ROUTES';
import {cx} from 'emotion';

export const Record: React.FC<UserMessageInterface> = memo(({hasBeenRead, title, message, date, ID}) => {
    const [displayMessage, setDisplayMessage] = useState(false);
    const [detailsStyle, setDetailStyle] = useState(displayNoneStyle);
    const dateToDisplay = dateDisplay(date);
    const messageHasBeenRead = useMessageActions();
    const pushToHistory = usePushToHistory();

    useEffect(() => {
        displayMessage ? setDetailStyle(displayBlockStyle) : setDetailStyle(displayNoneStyle);
    }, [displayMessage]);

    const onRecordClick = () => {
        if (!hasBeenRead) {
            messageHasBeenRead(ID);
        }
        !displayMessage ? pushToHistory(ROUTES.USER_MESSAGES + `/${ID}`) : pushToHistory(ROUTES.USER_MESSAGES);
        setDisplayMessage(state => !state);
    };

    return (
        <li className={recordStyle} onClick={onRecordClick}>
            <div>{hasBeenRead ? <BiEnvelopeOpen size="3rem" /> : <BiEnvelope size="3rem" />}</div>
            <div className={dateStyle}>
                <p>{dateToDisplay[0]}</p>
                <p>{dateToDisplay[1]}</p>
            </div>
            <div className={cx(toUpperCaseStyle, shrinkStyle)}>{title}</div>
            <div className={detailsStyle}>
                <div className={toUpperCaseStyle}>{title}</div>
                <div className={dateStyle}>
                    <p>
                        {dateToDisplay[0]} {dateToDisplay[1]}
                    </p>
                </div>
                <div>{message}</div>
            </div>
        </li>
    );
});
