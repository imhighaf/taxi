const { doc } = require('../db');
const keys = require('../config/keys')

module.exports = (app) => {
    app.get('/api/db', async (req, res) => {

        await doc.useServiceAccountAuth({
            client_email: 'dgdgg',//keys.googleClientEmail,
            private_key: keys.googlePrivateKey
        })


    //     await doc.loadInfo();
    //   //  await doc.sheetsById[0].setHeaderRow(['id', 'model', 'brand'])
    //    // await doc.sheetsById[0].addRow({id: 'AX1234CA', model: 'accent', brand: 'hyundai'  })
    //     await doc.sheetsById[0].addRow({id: 'SD1234DF', model: 'benz', brand: 'mercedez'  }, {insert: true})
    //     console.log(doc.sheetsById[0].headerValues)
    //     res.send({
    //         sheets: doc.sheetCount
    //     })
    })
}
