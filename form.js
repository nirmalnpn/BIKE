document.getElementById('bikeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const model = document.getElementById('model').value;
    const cc = document.getElementById('cc').value;
    const engine = document.getElementById('engine').value;
    const power = document.getElementById('power').value;
    const torque = document.getElementById('torque').value;
    
    const tableBody = document.getElementById('bikeTableBody');
    
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${model}</td>
        <td>${cc}</td>
        <td>${engine}</td>
        <td>${power}</td>
        <td>${torque}</td>
    `;
    
    tableBody.appendChild(newRow);
    
    document.getElementById('bikeForm').reset();
});


