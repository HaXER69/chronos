const form = document.querySelector('form');
	const input = document.querySelector('input');
		const urlFORM = document.querySelector('input');
			const isPROXY = document.getElementByID('check.Proxy');
				const isEXPLOITED = document.getElementByID('check.Expliot');
			// new uv @sync event listener/decodeURL
form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};