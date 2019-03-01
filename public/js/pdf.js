const firstName = document.getElementById('firstName');
const pdfButton = document.getElementById('pdf');

const createPDF = (e) => {
  fetch(`/api/student/${pdfButton.dataset.userid}`)
  .then(response => response.json())
  .then(resJSON => {
    console.log(resJSON);
  }).catch(err => console.error(err))

}

pdfButton.addEventListener('click', createPDF);


