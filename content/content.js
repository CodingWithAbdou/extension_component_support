let base_url;
let components;
let row;

const onReady = (callback) =>{
    if (document.readyState != 'loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', () => {
        if (document.readyState=='complete') callback();
    });
};

onReady(() => { 
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

    // inject html file
    load()
}

function load () {
    const request = new XMLHttpRequest();
    request.open('GET', chrome.runtime.getURL('content/injected.html') , true);

    request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
        const resp = request.responseText;

        document.querySelector('#toni').innerHTML = resp;
        actionInConenten(document.querySelector('#toni'))
    }
    };
    request.send();
}

function actionInConenten(toni) {
    document.getElementById('toni_btn-close').addEventListener('click' , () => {
        toni.remove()
    })
    

    for (let i=0 ; i < setting.length ; i++) {
        if (setting[i].url == base_url) {
            components = setting[i].components
            row = i
        }
    }

    createBoxs(components)

    document.querySelectorAll('.toni_btn').forEach( btn => {
        btn.addEventListener('click' , () => {
            console.log(btn.getAttribute('data-value'))
            navigator.clipboard.writeText(btn.getAttribute('data-value'))
        })
    })
}


function createBoxs(components = []) {
    components.forEach(component => {
        document.getElementById('toni_box').innerHTML +=   
        `<div class="toni_box" style="direction:${setting[row].lang == 'ar' ? 'rtl' : 'ltr'} ">
            <div class="toni_inner-box">
                <span class="toni_description">${component.codeDescription}</span>
                <div class="toni_min_code">
                    <button class="toni_btn" data-value="${component.code}" >${setting[row].lang == 'ar' ? 'نسخ' : 'copy'} </button>
                    <span class="toni_code">${setting[row].lang == 'ar' ? 'الكود :' : 'code :'}  ${component.code}</span>
                </div>
            </div>
        </div>`
    });    
}

