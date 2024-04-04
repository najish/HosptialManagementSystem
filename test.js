const qrcode = require('qrcode')
const express = require('express')
const app = express()




app.get('/',(req,res) => {
    const data = 'Hello My name is Najish Eqbal \n I love You Programming & Solving Complex Problem in real world\n'
    qrcode.toDataURL(data,(err, url) => {
        console.log(url)
        return res.send(`<img src=${url} alt='qr code' />`)
    })

})

app.listen(8080,() => {
    console.log('running at port : 8080')
})