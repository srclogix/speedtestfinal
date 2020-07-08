
let resposeReturnText = (body, callback) => {
    return callback(null, {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": '*',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "text/plain",
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            "Cache-Control": "post-check=0, pre-check=0",
            "Pragma": "no-cache"
        },
        body: (body != null) ? JSON.stringify(body.stack ? body.stack : body) : ''
    });
}

let resposeReturnBinary = (body, callback) => {

    let headers = {
        "Access-Control-Allow-Headers": '*',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        'Content-Description': 'File Transfer',
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename=random.dat',
        'Content-Transfer-Encoding': 'binary',
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        'Cache-Control': 'post-check=0, pre-check=0',
        'Pragma': 'no-cache',
    }

    return callback(null, {
        statusCode: 200,
        headers: headers,
        body: (body != null) ? JSON.stringify(body.stack ? body.stack : body) : ''
    });
}

module.exports = {
    resposeReturnText,
    resposeReturnBinary
}