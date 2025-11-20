const { File } = require('megajs');
const fs = require('fs');

// Replace with the direct MEGA file URL
const megaFileURL = 'https://mega.nz/folder/quh1mARR#cSafgcGnHP03SXmspSrTDA';

// Function to download the file
async function downloadFromMega(url) {
    try {
        const file = File.fromURL(url);
        
        console.log(`Downloading: ${file.name}`);
        
        file.download().pipe(fs.createWriteStream(file.name));
        
        file.download().on('end', () => {
            console.log(`Downloaded: ${file.name}`);
        });

    } catch (err) {
        console.error('Error:', err);
    }
}

// Call the function
downloadFromMega(megaFileURL);
