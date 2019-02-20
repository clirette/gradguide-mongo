const axios = require('axios');
const fs = require('fs');
const util = require('util');
const convert = require('xml-js');

const XML_COURSES_LIMIT = 3213; //found through trial and error

const courses = [];

const json = JSON.parse(fs.readFileSync('./response.json', 'utf-8'));
const courseArray = json.elements[0].elements;
// console.log(json.elements[0].elements);
console.log(`${XML_COURSES_LIMIT}/${courseArray.length}`);
for (let i = 0; i < courseArray.length; i++) {
    const courseObj = {
        subjectCode: courseArray[i].elements[1].elements[0].cdata,
        curriculumCourseNumber: courseArray[i].elements[2].elements[0].cdata,
        description: courseArray[i].elements[3].elements[0].cdata,
        credits: courseArray[i].elements[4].elements[0].text,
        name: courseArray[i].elements[5].elements[0].cdata
    }
    courses.push(courseObj);
}

fs.writeFileSync('./newJson.json', util.inspect(courses, { maxArrayLength: null }));


// axios.get('http://www.uno.edu/coursecatalog/ETG_REQ_CRSE_CATALOG_NOPROCID.xml')
// .then(res => {
//     let json = convert.xml2json(res.data, { compact: false });
//     json = JSON.parse(json);
//     console.log(typeof json);
//     // console.log(json.elements[1][1]);
//     const courseArray = json.elements[0].elements;
//     // console.log(json.elements[0].elements);
//     console.log(courseArray.length);
//     for (let i = 0; i < courseArray.length-XML_COURSES_LIMIT; i++) {
//         const courseObj = {
//             subjectCode: courseArray[i].elements[1].elements[0].cdata,
//             curriculumCourseNumber: courseArray[i].elements[2].elements[0].cdata,
//             description: courseArray[i].elements[3].elements[0].cdata,
//             credits: courseArray[i].elements[4].elements[0].text,
//             name: courseArray[i].elements[5].elements[0].cdata
//         }
//         courses.push(courseObj);
//     }
//     console.log(courseArray[XML_COURSES_LIMIT]);
//     // fs.writeFile('./courses.txt', util.inspect(courses, { maxArrayLength: null }), (err) => {
//     //     if (err) throw err;
//     // })
    
// }).catch(err => console.log(err));
