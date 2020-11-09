import {useHistory} from 'react-router-dom';

export const usePushToHistory = () => {
    const history = useHistory();
    const pushToHistory = (path: string) => {
        history.push(path);
    };
    return pushToHistory;
};
