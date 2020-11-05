let innerState = undefined;
exports.setState = newState => { innerState = newState; }
exports.getState = () => { return innerState; }
exports.reset = undefined => { innerState = undefined; }



 // exports default {setState, getState}