const mongoose = require('mongoose');
const { Schema } = mongoose;

const TWO_WEEKS = 14

const InsuranceSchema = new Schema({
    title: {type: String, required: true, lowercase: true},
    next: {type: String, required: true},
    iteration: {type: Number, required: true},
    alert: {type: Number, default: TWO_WEEKS}
})

const ServiceSchema = new Schema({
    title: {type: String, required: true, lowercase: true},
    next: {type: String, required: true},
    iteration: {type: Number, required: true},
    alert: {type: Number, default: 1000}
})


const CarSchema = new Schema({
    id: {type: String, required: true, uppercase: true},
    brand: {type: String, required: true},
    model: {type: String, required: true},
    bodyType: String,
    color: String,
    comfort: String,
    mileage: {type: Number, required: true},
    insurance: [InsuranceSchema],
    service: [ServiceSchema]

})

mongoose.model('cars', CarSchema);


// const car = new Car({
//     id: 'ax1234ac',
//     color: 'red',
//     brand: 'hyundai',
//     model: 'accent',
//     mileage: 79000,
//     ololo: 2342,
//     insurance: [
//         {
//             title: 'Страховка ОСАГО',
//             next: '10.07.2021',
//             iteration: 365,
//         },
//         {
//             title: 'Страховка КАСКО',
//             next: '10.07.2021',
//             iteration: 365,
//         },
//     ],
//     service: [
//         {
//             title: 'Регулировка клапанов',
//             next: 80000,
//             iteration: 10000,
//             alert: 1000
//         },
//         {
//             title: 'Масло двигателя',
//             next: 75000,
//             iteration: 4
//         },
//         {
//             title: 'Редуктор ГБО',
//             next: 82000,
//             iteration: 40000
//         },
//         {
//             title: 'Регулировка клапанов',
//             next: 80000,
//             iteration: 10000
//         },
//     ]
// })
// car.save()