const randomBytes = require('random-bytes');
const request = require('request');
const helpers = require('./routes/Helpers');
const {
    resposeReturnText,
    resposeReturnBinary
} = require('./routes/customLib');

module.exports.empty_get = (event, context, callback) => {
    try {
        resposeReturnText('', callback);
    } catch (error) {
        resposeReturnText(error, callback);
    }
}

module.exports.empty_post = (event, context, callback) => {
    try {
        resposeReturnText('', callback);
    } catch (error) {
        resposeReturnText(error, callback);
    }
}

module.exports.garbage_get = (event, context, callback) => {
    try {
        let chunkSize = event.queryStringParameters['ckSize'];
        const requestedSize = (chunkSize || 100);
        const send = (bytes) => {
            let cache;
            for (let i = 0; i < requestedSize; i++) {
                cache += bytes;
            }
            resposeReturnBinary(cache.toString('base64'), callback);
        }
        randomBytes(1048576, (error, bytes) => {
            send(bytes);
        });
    } catch (error) {
        resposeReturnText(error, callback);
    }
}

module.exports.ip_get = (event, context, callback) => {
    let requestIP = event['requestContext']['identity']['sourceIp'];
    if (requestIP.substr(0, 7) === "::ffff:") {
        requestIP = requestIP.substr(7)
    }
    request('https://ipinfo.io/' + requestIP + '/json', function (err, body, ipData) {
        ipData = JSON.parse(ipData);
        if (err) {
            resposeReturnText(requestIP, callback);
        }
        else {
            request('https://ipinfo.io/json', function (err, body, serverData) {
                serverData = JSON.parse(serverData);
                if (err) res.send(`${requestIP} - ${ipData.org}, ${ipData.country}`);
                else if (ipData.loc && serverData.loc) {
                    const d = helpers.calcDistance(ipData.loc.split(','), serverData.loc.split(','));
                    resposeReturnText(`${requestIP} - ${ipData.org}, ${ipData.country} (${d}km)`, callback);
                } else {
                    resposeReturnText(`${requestIP} - ${ipData.org}, ${ipData.country}`, callback);
                }
            })
        }
    });
}

