console.log('\n\n-: App Started :-');




//console.log('-------------------------------\n', process.env.PORT, process.env.CryptoJSKey, '\n--------------------------');



const express   = require('express');
const app       = express();




app.use('/', (req, res, next)=>{

    const CryptoJS      = require('crypto-js');
    const message       = 'myCryptoJS-SecretCode-789456';
    const CryptoJSKey   = process.env.CryptoJSKey;
    
    // encrypt the message using AES encryption
    const ciphertext = CryptoJS.AES.encrypt(message, CryptoJSKey);
    
    // decrypt the ciphertext using AES decryption
    const bytes = CryptoJS.AES.decrypt(ciphertext, CryptoJSKey);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    
    console.log('Msg : ', message);
    console.log('CryptoJS Hash : ', ciphertext.toString());
    console.log('DeCrypt Msg : ', plaintext,'\n\n');
    

    console.log('-: Welcome :-');
    res.send('-: Welcome :-');
    next();
});

console.log('-: App Running :-');
app.listen(3015);