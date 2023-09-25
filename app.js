let defaultLang = 'ar'
let arbicFont = "https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap"
let englishFont = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"


let setting = [
    {
        url : "https://khamsat.com/",
        lang: 'en',
        components : [
            {
                code: 'AU7Y',
                codeDescription : "خصم على الكود"
            },
            {
                code: 'FFFF',
                codeDescription : "خصم على الكود"
            },
            {
                code: 'AU7Y',
                codeDescription : "خصم على الكود"
            },
            {
                code: 'AU7Y',
                codeDescription : "خصم على الكود"
            },
            {
                code: 'AU7Y',
                codeDescription : "خصم على الكود"
            },
        ] , 
    },

    {
        url : "https://mostaql.com/",
        lang: 'en',
        components : [
            {
                code: 'AU7Y',
                codeDescription : "خصم على الكود"
            },
            {
                code: 'now',
                codeDescription : 'خصم جديد خصم جديد سارع الان'
            },
            {
                code: 'FFF',
                codeDescription : "خصم على الكود"
            },
        ] , 
    },

    {
        url : "https://dev.to/",
        lang: 'en',
        components : [
            {
                code: 'AU7Y',
                codeDescription : "خصم على الكود"
            },
        ] , 
    },
]


let sites = [];

for (let i=0 ; i < setting.length ; i++) {
    if(setting[i].url.trim() == '') continue;
    sites.push(setting[i].url)
}
