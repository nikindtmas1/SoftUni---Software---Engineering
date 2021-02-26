function loadCommits() {
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repository}/commits`;

    const ulEl = document.getElementById('commits');

    fetch(url)
    .then(res => res.json())
    .then(data => {
        let result = data.map(x => `<li>${x.commit.author.name}: ${x.commit.message}</li>`);
        ulEl.innerHTML = result.join('\n');
    })
    .catch(err => {
        ulEl.innerHTML = `<li>Error: ${err.status} (${err.statusText})</li>`;
    })
}