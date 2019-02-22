const fs = require('fs');

const majors = ['A&S^Arts and Sciences', 'AADM^Arts Administration', 'ACCT^Accounting', 'AERO^Aerospace Studies', 'ANTH^Anthropolgy', 'BA^Business Administration', 'CHEM^Chemistry', 'COBA^Co-Operative Education - BADM', 'COEN^Co-Operative Education - ENGR', 'COLA^Co-Operative Education - LA', 'COSC^Co-Operative Education SC', 'CSCI^Computer Science', 'DURB^Urban Studies-DURB', 'ECON^Economics', 'EDAD^Educational Administration', 'EDCI^Curriculum and Instruction', 'EDFR^Educ Foundations and Res-EDFR', 'EDGC^Counselor Education', 'EDHP^Human Performance-EDHP', 'EDHS^Health Promotion-EDHS', 'EDLS^Library Science', 'EDSP^Spec Educ and Habilitative Svcs', 'EDUC^Education', 'EES^Earth and Environmental Sci-EES', 'ENAS^Engineering and Applied Science', 'ENCE^Civil and Environmental Engr', 'ENEE^Electrical Engineering', 'ENGL^English', 'ENGR^Engineering', 'ENME^Mechanical Engineering', 'ENMG^Engineering Management', 'FA^Fine Arts', 'FIN^Finance', 'FREN^French', 'FTA^Film and Theatre', 'GEOG^Geography', 'GER^German', 'HCM^Health Care Management', 'HRT^Hotel, Restaurant and Tourism Administration', 'IDS^Interdisciplinary Studies', 'IS^International Studies', 'ITAL^Italian', 'JAPN^Japanese', 'JOUR^Journalism', 'LAT^Latin', 'MANG^Management', 'MATH^Mathematics', 'MILS^Military Science - MILS', 'MKT^Marketing', 'MURP^Urban and Regional Planning', 'MUS^Music', 'NAME^Naval Architecture and Marine Engineering', 'NAVS^Naval Science - NAVS', 'NSE^National Student Exchange', 'PADM^Public Administration', 'PHIL^Philosophy', 'PHYS^Physics', 'POLI^Political Science', 'PSYC^Psychology', 'QMBE^ Quantitative Methods - Bus and Econ', 'ROML^Romance Languages', 'SOC^Sociology', 'SPAN^Spanish', 'TRNS^Transportation', 'URBN^Urban Studies', 'WGS^Womens and Gender Studies'];
let majorStr = `const majors = [`;

majors.forEach(major => {
    const [ majorCode, majorName ] = major.split('^');
    majorStr += `{
        majorCode: '${majorCode}',
        majorName: '${majorName}'
    },`;
});

majorStr += ']';
fs.writeFileSync('./majorsString.js', majorStr);
// console.log(majorStr);