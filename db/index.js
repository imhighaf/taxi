const { GoogleSpreadsheet } = require('google-spreadsheet');
const {
    googleSheetId,
    googleClientEmail,
    googlePrivateKey } = require('../config/keys');

const TIME_TO_EXPIRE = 60 * 1000 // 1min

const idsMap = {
    CARS: 0,
}


const doc = new GoogleSpreadsheet(googleSheetId);

const auth = async () => {
    let expiresIn;

    if (doc.jwtClient) {
        const { gtoken } = doc.jwtClient;
        expiresIn = gtoken.expiresAt - Date.now();
    }
    if (!doc.jwtClient || expiresIn <= TIME_TO_EXPIRE) {
        await doc.useServiceAccountAuth({
            client_email: googleClientEmail,
            private_key: googlePrivateKey
        });
    }
    return doc
}


//get sheet by name
const getSheet = async (name) => {
    const indx = idsMap[name.toUpperCase()]
    await auth();
    await doc.loadInfo();
    return doc.sheetsByIndex[indx]
}

const buildRowJson = (row, headers) => {
    const data = headers.reduce((acc, header) => {
        return { ...acc, [header]: row[header] }
    }, {})
    data._dbRowNumber = row.rowNumber
    return data;
}

const getRows = async (sheet) => {
    const rows = await sheet.getRows();
    const rowsJson = rows.map(row => {
        return buildRowJson(row, sheet.headerValues);
    })
    return rowsJson;
}


module.exports = {
    getSheet,
    getRows,
}


