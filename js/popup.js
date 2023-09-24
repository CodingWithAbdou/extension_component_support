
// add site to popup
for(let i =0 ; i < sites.length ; i++ ) {
    const li = document.createElement('li')
    let link = new URL(sites[i]);
    li.innerHTML = link.host
    document.getElementById('site').append(li)
}