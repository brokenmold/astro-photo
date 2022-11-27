const albums = (path: string) => `https://jsonplaceholder.typicode.com/albums/${path}`;

export deafult async function fetchAPI(path: string) {
  const url = albums(path);
	const headers = { 'User-Agent': 'chrome' };

	try {
		let response = await fetch(url, { headers });
		let text = await response.text();
		try {
			if (text === null) {
				return { error: 'Not found' };
			}
			return JSON.parse(text);
		} catch (e) {
			console.error(`Recevied from API: ${text}`);
			console.error(e);
			return { error: e };
		}
	} catch (error) {
		return { error };
	}
}