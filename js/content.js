
$(document).ready(function() {
    if (!canInjectContentScript(window.location.href))  return ;
});

function canInjectContentScript (url) {
    if (url.startsWith('https://chrome.google.com') ) return false

    for(let i =0 ; i < sites.length ; i++ ) {
        if(url.indexOf(sites[i]) >= 0 ) {
            setTimeout( injectHtmlFile , 2000); 
        }
    }
}

function injectHtmlFile() {
    if (document.getElementById('toni')) return;

    const div = document.createElement('div')
    div.id = 'toni'
    document.body.append(div)

    $("#toni").load(chrome.runtime.getURL('../html/injected.html') , actionInConenten)
}

function actionInConenten() {
    $('.btn-close').click(function () {
        $("#toni").remove()
    })
}