import texts from '../../constants/translations';
import driver from './icons/driver.png';
import driverInactive from './icons/driver-bw.png';

const buttons = [
    {
        label: texts.SHIFTS_CHANGE,
        path: '/change-shift',
        
    },
    {
        label: texts.SHIFTS_LOG,
        path: '/log',
    },
    {
        label: texts.DRIVERS,
        path: '/drivers',
        img: driver,
        imgInactive: driverInactive,
    },
    {
        label: texts.MENU,
        path: '/menu',
    },
];

export default buttons;