let base_url;
let components;

$(document).ready(function() {
    if (!canInjectContentScript(window.location.href))  return ;
});

function canInjectContentScript (url) {
    if (url.startsWith('https://chrome.google.com') ) return false

    for(let i =0 ; i < sites.length ; i++ ) {
        if(url.indexOf(sites[i]) >= 0 ) {
            base_url = sites[i]
            setTimeout( injectHtmlFile , 1000); 
            return;
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
    $('#toni_btn-close').click(function () {
        $("#toni").remove()
    })

    for (let i=0 ; i < setting.length ; i++) {
        if (setting[i].url == base_url) {
            components = setting[i].components
        }
    }

    components.forEach(component => {
        document.getElementById('toni_box').innerHTML +=   
        `<div class="toni_box">
            <div class="toni_inner-box">
                <span class="toni_description">${component.codeDescription}</span>
                <div class="toni_min_code">
                    <button class="toni_btn" id="toni_button-copy">copy</button>
                    <span class="toni_code">code: ${component.code}</span>
                </div>
            </div>
        </div>`
    });

    document.querySelectorAll('button-copy').forEach(btn => {
        btn.addEventListener('')
    })
}