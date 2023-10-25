const saveButton = document.querySelectorAll('#save-button');

saveButton.forEach(link => link.addEventListener('click', (event) => {
    event.preventDefault();
    const pairingId = link.getAttribute('value');
    console.log(pairingId)

    fetch('/api/search/update', {
        method: 'POST',
        body: JSON.stringify({ id: pairingId }),
        headers: { 'Content-Type': 'application/json' },
    })
    alert("Saved!");
}));