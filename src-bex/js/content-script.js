chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
    console.log(response.farewell);
});

function addScript(src, callback) {
    var s = document.createElement('script');
    s.setAttribute('src', src);
    s.setAttribute("type", "text/javascript");
    s.onload = callback;
    document.head.appendChild(s);
}


addScript(chrome.extension.getURL('www/vue.js'), () => {
    'use strict';
    addScript(chrome.extension.getURL('js/quasar.umd.min.js'), () => { });
    addScript(chrome.extension.getURL('www/custom.js'), () => { });
})
addScript(chrome.extension.getURL('www/vuex.js'), () => { });








