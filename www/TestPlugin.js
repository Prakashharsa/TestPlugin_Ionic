var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'TestPlugin', 'coolMethod', [arg0]);
};


module.exports.testPI = function(arg0,success,error){
exec(success,error,'TestPlugin','testPI',[arg0]);
}