const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');
const portPath = '/dev/ttyUSB100';
const port = new SerialPort(portPath, { baudRate: 115200 });

const parser = new ReadLine();
port.pipe(parser);

parser.on('data', line => {
    console.log(line);
});
port.write('0;0;3;0;28;E\n');
