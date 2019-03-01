const doc = new jsPDF();

const createPDF = (e) => {
  doc.text('Hello World', 10, 10)
  doc.save('example.pdf');
}

const pdfButton = document.getElementById('pdf');
pdfButton.addEventListener('click', createPDF);


