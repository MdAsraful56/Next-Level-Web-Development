const fs = require('fs');

const readStream = fs.createReadStream('hello.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('output.txt', { encoding: 'utf8' });


readStream.on('data', (data) => {
    console.log('Data received:', data);

    writeStream.write(data, (err) => {
        if (err) {
            console.error('Error writing data:', err);
        } else {
            console.log('Data written successfully');
        }
    });
});

readStream.on('end', () => {
    console.log('No more data to read');
    writeStream.end();
});

readStream.on('error', (err) => {
    console.error('Error reading stream:', err);
});

writeStream.on('error', (err) => {
    console.error('Error writing stream:', err);
});


writeStream.on('finish', () => {
    console.log('Write stream finished successfully');
});
writeStream.on('close', () => {
    console.log('Write stream closed');
});