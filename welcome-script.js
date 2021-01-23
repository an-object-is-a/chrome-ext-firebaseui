let i = 4;

let id = setInterval(() => {
    document.querySelector('#count').innerText = `${i} ${i == 1 ? 'second.' : 'seconds.'}`;
    i--;

    if (i === -1) {
        clearInterval(id);
        window.close();
    }
}, 1000);

