const majorCode = document.querySelector('#major-dropdown');
const dropdownSubmit = document.querySelector('#major-dropdown-submit');

const showCoursesForMajor = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(majorCode.value);
  window.location = `http://localhost:8000/courses/${majorCode.value}`;
}

dropdownSubmit.addEventListener('click', showCoursesForMajor)