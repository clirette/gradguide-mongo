const majorCode = document.querySelector('#major-dropdown');
const dropdownSubmit = document.querySelector('#major-dropdown-submit');

const showCoursesForMajor = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(majorCode.value);
  window.location = `${e.target.href}/${majorCode.value}`;
}

dropdownSubmit.addEventListener('click', showCoursesForMajor);