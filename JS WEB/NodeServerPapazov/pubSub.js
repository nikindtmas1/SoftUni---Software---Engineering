const events = {}

module.exports = {
    
    publish(eventName, param){
        if(events[eventName]){
            events[eventName].forEach(callBack => {
                callBack(param)
            });
        }
    },
    
    subscribe(eventName, callBack){
        if(!events[eventName]){
            events[eventName] = [];
        }

        events[eventName].push(callBack);
    },

    
}