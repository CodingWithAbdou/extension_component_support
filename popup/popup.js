
// add site to popup
for(let i =0 ; i < sites.length ; i++ ) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    let link = new URL(sites[i]);
    li.innerHTML = link.host 
    document.getElementById('site').append(li)
}


const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');

if( defaultLang == 'ar') {
    link.setAttribute('href', arbicFont);
    document.body.classList.add('ar')

}else {
    link.setAttribute('href', englishFont);
    document.body.classList.add('en')

    document.querySelector('.h1').innerHTML = "Welcome In Toni Extension"
    document.querySelector('.paragreph').innerHTML = 'This Extension Just Work In Link Below'
}
document.head.appendChild(link)

