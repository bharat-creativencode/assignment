const express = require('express');
const {Factorial} = require('./build/Release/addon');
const NATIVE = 'native';
const JS = 'js';

const app = express();

app.get('/getFactorial/:number', (req, res) => {
    var number = req.params.number;
    number = parseInt(number);
    if(isNaN(number)) {
        res.send({ 'status': false, 'msg': 'Please input valid number'});
    } else {
        var factorial = Factorial(number);
        res.send({ 'factorial': factorial, 'status': true});
    }
});

app.listen(3000, () => {
	console.log('Server is run on port 3000');
});