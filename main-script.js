document.querySelector('#sign_out').addEventListener('click', () => {
    chrome.runtime.sendMessage({ message: 'sign_out' }, function (response) {
        if (response.message === 'success') {
            window.location.replace('./popup.html');
        }
    });
});