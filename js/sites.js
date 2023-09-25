
let setting = [
    {
        url : "https://khamsat.com/",
        components : [
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
            {
                code: 'AU7Y',
                codeDescription : "خصم على الكود"
            },
            {
                code: 'AU7Y',
                codeDescription : "خصم على الكود"
            }
        ] , 
    },

    {
        url : "https://mostaql.com/",
        components : [
            {
                code: 'AU7Y',
                codeDescription : "خصم على الكود"
            }
        ] , 
    },
]



let sites = [];

for (let i=0 ; i < setting.length ; i++) {
    if(setting[i].url.trim() == '') continue;
    sites.push(setting[i].url)
}
