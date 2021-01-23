let user_signed_in = false;

// chrome.browserAction.onClicked.addListener(function () {
//     chrome.windows.create({
//         url: './popup.html',
//         width: 300,
//         height: 600,
//         focused: true
//     });
// })

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'is_user_signed_in') {
        sendResponse({
            message: 'success',
            payload: user_signed_in
        });
    } else if (request.message === 'sign_out') {
        user_signed_in = false;
        sendResponse({ message: 'success' });
    } else if (request.message === 'sign_in') {
        user_signed_in = true;
        sendResponse({ message: 'success' });
    }

    return true;
});