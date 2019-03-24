const crypto = require('crypto');
const fs = require('fs');

function getKey(password) {
    return new Promise((res, rej) => {
        crypto.scrypt(password, 'salt', 24, (err, derivedKey) => {
            if (err) {
                rej(err);
            }
            res(derivedKey);
        });
    })
};

(async function main() {
    const algorithm = 'aes-192-cbc';
    const password = 'Password used to generate key';
    // Use `crypto.randomBytes()` to generate a random iv instead of the static
    const iv = Buffer.alloc(16, 0);
    const key = await getKey(password);
    
    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    const input = fs.createReadStream('encrypted.enc');
    const output = fs.createWriteStream('decrypted.txt');

    input
        .pipe(decipher)
        .pipe(output);
})();

