import moment from 'moment';

const dateCounter = (date: Date, language: string) => {
    if (language === 'en')
        return moment(date).locale('en').fromNow();
    import(`moment/locale/${language}`).catch(() => {
        return moment(date).locale('en').fromNow();
    });

    return moment(date).locale(language).fromNow();
};
export const customCalender = (date: Date, language: string) => {
    if (language === 'en')
        return moment(date).format('DD/MM/YYYY HH:mm');
    import(`moment/locale/${language}`).catch(() => {
        return moment(date).locale('en').calendar();
    });
    return moment(date).locale(language).format('DD/MM/YYYY HH:mm');
};

export default dateCounter;