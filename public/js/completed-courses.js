const links = [...document.querySelectorAll('.delete-link')];
links.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault();
    let el;
    if (e.target.tagName.toLowerCase() == 'i') {
        el = e.target.parentElement;
    } else if (e.target.tagName.toLowerCase() == 'a') {
        el = e.target;
    }
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: `id=${el.dataset.courseid}`
    }
    fetch(el.href, options)
    .then(res => {
        return res.json()
    })
    .then(myJson => {
        window.location = myJson.redirectUrl;
    })
    .catch(err => console.error(err));
}))