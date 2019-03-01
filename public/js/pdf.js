const doc = new jsPDF();

const firstName = document.getElementById('firstName');
const pdfButton = document.getElementById('pdf');

const createPDF = (e) => {
  // doc.text('Hello World', 10, 10)
  // doc.text(firstName.value, 10, 20);
  // doc.save('example.pdf');
  console.log(pdfButton.dataset.userid);
  fetch(`/api/student/${pdfButton.dataset.userid}`)
  .then(response => response.json())
  .then(studentInfo => {
    const { classification, completedCourses, email, firstName, lastName, majorCode, majorName } = studentInfo;
    doc.text(`${firstName} ${lastName}, ${classification} studying ${majorName}`, 10, 10);
    doc.text(`Below are the completed courses`, 10, 20);
    doc.line(10, 30, 180, 30);
    let y = 50;
    completedCourses.forEach(course => {
      const { credits, description, grade, instructor, name, semester, subjectCode, subjectNumber } = course;
      doc.setFontType('bold');
      const courseText = doc.splitTextToSize(`${subjectCode}-${subjectNumber} ${name}, Instructor: ${instructor}, Grade: ${grade}, Semester: ${semester}`, 180);
      doc.text(courseText, 10, y);
      doc.setFontType('normal');
      const descriptionText = doc.splitTextToSize(`${description}`, 180);
      doc.text(descriptionText, 10, y+20);
      y += 40;
    });
    doc.save('courses.pdf');
  })
  .catch(err => console.log(err));
}

pdfButton.addEventListener('click', createPDF);


