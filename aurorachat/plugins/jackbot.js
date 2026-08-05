// Orstando's Jackbot Plugin

function init(core, config) {
    function onmessage(msg, client) {
        if (msg.content.includes("jack")) {
           setTimeout(()=>{
              client.onsend({
                           author: config.name,
                           content: "im jacking you."
              })
           }, 1)
       }
       return msg
    }

    function log(...args) {
        console.log(config.name, ...args)
    }

    log('Loaded')

    return onmessage
}

module.exports = init