export const useMessageActions = () => {
    const messageHasBeenRead = (ID: string) => {
        console.log('Ustawiam, że przeczytano wiadomość');
    };

    return messageHasBeenRead;
};
