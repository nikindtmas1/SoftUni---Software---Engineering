function loadRepos() {
	const userName = document.getElementById('username').value;
	const url = `https://api.github.com/users/${userName}/repos`;
	const link = document.querySelector('a');

	fetch(url)
		.then(res => res.json())
		.then(data => {
			let result = data.map(x => `<li><a href="${x.html_url}">${x.full_name}</a></li>`)
			link.innerHTML = result.join('\n');
		})

}