import texts from '../../constants/translations';
import drivers from '../../icons/persons.png';
import driversActive from '../../icons/personsActive.png';
import log from '../../icons/log.png';
import logActive from '../../icons/logActive.png';
import menu from '../../icons/menu.png';
import menuActive from '../../icons/menuActive.png';
import cars from '../../icons/cars.png';
import carsActive from '../../icons/carsActive.png';



const buttons = [
    {
        label: texts.SHIFTS_CHANGE,
        path: '/home',
        img: cars,
        imgActive: carsActive
    },
    {
        label: texts.SHIFTS_LOG,
        path: '/home',
        img: log,
        imgActive: logActive
    },
    {
        label: texts.DRIVERS,
        path: '/home',
        img: drivers,
        imgActive: driversActive,
    },
    {
        label: texts.MENU,
        path: '/home',
        img: menu,
        imgActive: menuActive,
    },
];

export default buttons;