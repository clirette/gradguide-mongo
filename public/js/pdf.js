const doc = new jsPDF();

const firstName = document.getElementById('firstName');
const pdfButton = document.getElementById('pdf');

/**
 * jsPDF - Line wrapping is not enabled by default. This is
 * acheived by doc.splitTextToSize(string, width) which returns
 * an array of strings that are cut off at a specified width.
 * It may be possible to keep track of y positioning by noting
 * each array's length (where each index is a line of text) and
 * multiplying by some constant, coordinated with the text height,
 * to ensure correct positioning.
 * 
 */

const createPDF = (e) => {
  // doc.text('Hello World', 10, 10)
  // doc.text(firstName.value, 10, 20);
  // doc.save('example.pdf');
  console.log(pdfButton.dataset.userid);
  fetch(`/api/student/${pdfButton.dataset.userid}`)
  .then(response => response.json())
  .then(studentInfo => {
    const { classification, completedCourses, email, firstName, lastName, majorCode, majorName } = studentInfo;
    const table = {
      head: [['Course', 'Grade', 'Instructor']],
      body: []
    }
    completedCourses.forEach(course => {
      const { credits, description, letterGrade, instructor, name, semester, subjectCode, subjectNumber } = course;
      const bodyArray = [`${subjectCode}-${subjectNumber} ${name}`, letterGrade, instructor];
      table.body.push(bodyArray);
    });
    doc.text(`Transcripts for ${firstName} ${lastName}`, 10, 10)
    doc.autoTable(table);
    doc.save('courses.pdf');
  })
  .catch(err => console.log(err));
}

pdfButton.addEventListener('click', createPDF);


