function deleteByEmail() {

    let input = document.querySelector('input[name = "email"]').value;

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    for (const row of rows) {

        if (row.children[1].textContent == input) {

            row.parentNode.removeChild(row);

            document.getElementById('result').textContent = 'Deleted.';
        }
        document.getElementById('result').textContent = 'Not found.';
    }

    //console.log(rows);
}