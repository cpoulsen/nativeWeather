import moment from "moment/moment";

export function roundingDecimal(number) {
    return Math.round(number * 10) / 10;
}

export function cutTime(time) {
    moment.locale('en-gb');
    let dateTime = moment(time*1000).format('LT');
    if (dateTime == '00:00') {
        return '24:00'
    }
    else {
        return dateTime;
    }

}

export function theDay(time) {
    moment.locale('en-gb');
    return moment(time*1000).format('dddd');
}