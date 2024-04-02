// Gestione dell'handler di ridimensionamento
const resizeHandle = document.querySelector('.resize-handle');
const resizableBox = document.querySelector('.resizable-box');
const greenBox = document.querySelector('.green-box');
const boxPagina = document.querySelector('.box-pagina');
const boxPaginaCnt = document.querySelector('.box-pagina-content');



// Gestione del clic sull'immagine nite.png nel box rosso
const boxImage1 = document.querySelector('.box-image1');

boxImage1.addEventListener('click', function() {
    // Rimuove eventuali immagini già presenti nel box verde
    greenBox.innerHTML = '';

    // Crea un elemento immagine per l'immagine nite2.png
    const boxImage2 = document.createElement('img');
    boxImage2.src = 'nite2.png';
    boxImage2.alt = 'Immagine 2';
    boxImage2.classList.add('box-image2');

    // Imposta le dimensioni dell'immagine nite2.png
    boxImage2.style.width = '30px';
    boxImage2.style.height = '30px';
    boxImage2.style.position = 'absolute';
    boxImage2.style.top = '8px';
    boxImage2.style.left = '50px';

    // Aggiunge l'immagine nite2.png al box verde
    greenBox.appendChild(boxImage2);

    
      // Aggiungi un event listener per il clic sull'immagine nite2.png
      boxImage2.addEventListener('click', function() {
        // Rimuove il contenuto precedente del box giallo
        boxPaginaCnt.innerHTML = '';

        // Crea la tabella utilizzando la funzione leggiCSV
        leggiCSV();
    });
});

// Funzione per leggere il file CSV
function leggiCSV() {
    // Implementa la logica per leggere il file CSV e creare la tabella qui
    fetch('dati.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n'); // Dividi i dati del CSV in righe
            const table = document.createElement('table');
            table.classList.add('table');

            // Per ogni riga del CSV
            rows.forEach(rowData => {
                const row = document.createElement('tr');
                const columns = rowData.split(';'); // Dividi i dati della riga in colonne usando il separatore del CSV

                // Per ogni colonna della riga
                columns.forEach(columnData => {
                    const cell = document.createElement('td');
                    cell.textContent = columnData; // Imposta il testo della cella con il valore della colonna
                    row.appendChild(cell); // Aggiungi la cella alla riga
                });

                table.appendChild(row); // Aggiungi la riga alla tabella
            });

            // Aggiungi la tabella al boxPaginaCnt
            boxPaginaCnt.appendChild(table);
        })
        .catch(error => console.error('Errore nella lettura del file CSV:', error));
}
