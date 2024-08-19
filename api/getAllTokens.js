const WebSocket = require('ws');

const ws = new WebSocket('wss://rpc.api-pump.fun/ws');  

ws.on('open', function open() {
    // Subscribing to all pump.fun trades


    // Subscribing to new pools
    payload = {
        method: "subscribeNewPools",
        params: []
    };
    ws.send(JSON.stringify(payload));

    // Subscribing to trades on specific mint

});

ws.on('message', function message(data) {
    console.log(JSON.parse(data));
});
