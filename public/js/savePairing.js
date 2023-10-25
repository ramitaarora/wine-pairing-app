const saveButton = document.querySelector('#save-button');

saveButton.addEventListener('click', (event) => {
    event.preventDefault();
    const pairingId = saveButton.getAttribute('value');
    console.log(pairingId)

    fetch('/api/search/update', {
        method: 'POST',
        body: JSON.stringify({ id: pairingId }),
        headers: { 'Content-Type': 'application/json' },
    })
    alert("Saved!");
});