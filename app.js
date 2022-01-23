const http = require('http');
// have name return 
const myname = (name) => {
    return `My name is ${name} Here is my IP address`
}
const callHttpbin = async () => {
    let promise = new Promise((resolve, reject) => {
        http.get(
            'http://httpbin.org/ip',
            function (response) {
                let str = "";
                response.setEncoding('utf8');
                response.on('data', function (data) {
                    console.log(data)
                    // still getting data so keep stoaring to a variable
                    str += data;
                });
                response.on('end', function () {

                    resolve(JSON.parse(str))
                });
            });

    })

    let result = await promise;
    console.log(result.origin)
    return result.origin
}
const executeAsyncTask = async () => {
    const valueA = await callHttpbin()
    let name = "Brian"
    const valueB = myname(name);
    console.log(valueB + " " + valueA)
}

executeAsyncTask()
// Output Here is my IP address 149.24.160.1