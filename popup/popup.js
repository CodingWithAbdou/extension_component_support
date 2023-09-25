
// add site to popup
for(let i =0 ; i < sites.length ; i++ ) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    let link = new URL(sites[i]);
    // a.href =  link.host 
    // a.target = '_blank'
    // .append(a)
    // li.addEventListener('click'  , ()=> {
    //     chrome.tabs.create({ url: link.host });
    // })
    // li.style.cursor = 'pointer'
    li.innerHTML = link.host 
    document.getElementById('site').append(li)
}

if(defaultLang == 'en') {
    document.querySelector('.h1').innerHTML = "Welcome In Toni Extension"
    document.querySelector('.paragreph').innerHTML = 'This Extension Just Work In Link Below'
}