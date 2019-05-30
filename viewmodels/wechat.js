console.log('load wechat.js');

// const access_token = '17_Wi7SeShqk1mfoZhLCjtH9Xpd56-0gFoqKTw86Ni4jWzfXNUoOBco5eTRo_BohtfogQR3sqJTSQXuIhRrEG-cqM8nvyIKVr3jS9BF6cSZG-QuftGgZ5-dXUpjG7DdqGr3HNAPT1ga9_aoo8NEGOQiAAAUCE';
const ticket = 'VUkHJgW2SFNG4xhs6ZntSL35nGyqqZyY5oqsbAHM9SM7SnXgpQDmR8OFR8VvZ7kv2Q0cwwfhS6KNzND-xYsauw';

const appId = 'wx93df1991b444d85e';
const timestamp = Date.now();
const nonceStr = Math.random().toString(16).substr(2);

const url = location.href;
console.log(url);

const originParams =
    'jsapi_ticket=' + ticket
    + '&noncestr=' + nonceStr
    + '&timestamp=' + timestamp
    + '&url=' + url;

var shaObj = new jsSHA("SHA-1", "TEXT");
shaObj.update(originParams);
var signature = shaObj.getHash("HEX");

wx.config({
    debug: false,
    appId: appId,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: [
        'getLocation'
    ]
});

wx.error(function (res) {
    console.log('wx error');
    console.log(res);
});

wx.ready(function () {
    console.log('wx ready');
});


var app = new Vue({
    el: '#app',
    data: {
    }
})