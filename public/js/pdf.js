const doc = new jsPDF();

const firstName = document.getElementById('firstName');

const createPDF = (e) => {
  doc.text('Hello World', 10, 10)
  doc.text(firstName.value, 10, 20);
  doc.save('example.pdf');

}

const pdfButton = document.getElementById('pdf');
pdfButton.addEventListener('click', createPDF);


