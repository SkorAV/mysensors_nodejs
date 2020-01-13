const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');
const portPath = '/dev/ttyUSB100';
const port = new SerialPort(portPath, { baudRate: 115600 });

const parser = new ReadLine();
port.pipe(parser);

parser.on('data', line => {
    console.log(line);
});
