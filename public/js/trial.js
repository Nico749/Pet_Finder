const bt = document.querySelector('#bt');
bt.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="subject"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    });
    alert(output);
}); 