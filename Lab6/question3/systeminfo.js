
var os = require('os');

    console.log("Architecture:" + os.arch());
    console.log("Hostname:" + os.hostname());
    console.log("Systemtype:" + os.type());
    console.log("User:" + os.userInfo(['']));
    console.log("Home directory:" + os.homedir());



module.exports = os;