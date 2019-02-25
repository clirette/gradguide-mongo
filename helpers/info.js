const fullCourses = require('./fullcourses');
const Course = require('../models/course');
const Student = require('../models/student');
const Major = require('../models/major');
const majors = require('./majorsString').majors;

module.exports = {

  students: [
    {
      firstName: 'Chase',
      lastName: 'Lirette',
      degree: 'Undergraduate',
      status: 'Senior',
      majorName: 'Computer Science',
      majorsubjectCode: 'CSCI',
      completedCourses: [
        {
           degree: 'Undergraduate',
           subjectNumber: 1581,
           subjectCode: 'CSCI-1581',
           name: 'Software Design and Development I Laboratory',
           description: `Prerequisite: Concurrent registration in CSCI 1583 is required. Two hours of laboratory each week to accompany CSCI 1583. Applications, exercises, and explorations in methodologies, software design, and development. `,
           credits: 1,
           instructor: 'Jake Barron',
           semesterCompleted: 'Fall 2016',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 1583,
           subjectCode: 'CSCI-1583',
           name: 'Software Design and Development I',
           description: `Prerequisite: MATH 1115 or higher with a grade of C or better; Eligibility for Math 1125 or higher, concurrent registration in CSCI 1581 is required. An introduction to software design and development using an object-oriented approach. Topics include designing specifying implementing and testing elementary classes; developing simple algorithms in an object-oriented programming language; programming-by-contract; implementing fundamental structural relations between classes. Intended primarily for Computer Science majors. Except as provided for in individual college policies a student may receive credit in only one of CSCI 1060, 1201, 1203, 1205, and 1583. `,
           credits: 3,
           instructor: 'Ted Holmberg',
           semesterCompleted: 'Fall 2016',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2120,
           subjectCode: 'CSCI-2120',
           name: 'Software Design and Development II',
           description: `Prerequisites: CSCI 1583 and 1581; concurrent registration in CSCI 2121 is required. (The successor course CSCI 2125 has MATH 3721 as a co-requisite; credit or concurrent registration in MATH 1116 or MATH 1126, which are prerequisites for MATH 3721, is therefore recommended).  A continuation of CSCI 1583 and 1581 with emphasis on algorithmic techniques and the structuring of larger systems. Topics include sorting and searching, recursion, inheritance and polymorphism, composition, abstract classes and interfaces, exception handling, and the model-view-controller structure. Three hours of lecture. `,
           credits: 3,
           instructor: 'Nathan Cooper',
           semesterCompleted: 'Spring 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2121,
           subjectCode: 'CSCI-2121',
           name: 'Software Design and Development II Laboratory',
           description: `Prerequisite: Concurrent registration in CSCI 2120 is required. Two hours of laboratory each week to accompany CSCI 2120. Applications, exercises, and explorations in methodologies for software design and development. `,
           credits: 1,
          instructor: 'Jake Barron',
           semesterCompleted: 'Spring 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2125,
           subjectCode: 'CSCI-2125',
           name: 'Data Structures',
           description: `Prerequisites: CSCI 2120 and 2121. Credit or concurrent registration in MATH 3721 is required. A continuation of CSCI 2120 and 2121 with emphasis on the design and implementation of structured data objects such as lists, stacks, queues, trees, and graphs; storage allocation for structured data objects. `,
           credits: 3,
           instructor: 'Professor Christopher Summa',
           semesterCompleted: 'Summer 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2450,
           subjectCode: 'CSCI-2450',
           name: 'Machine Structure and Assembly Language Programming',
           description: `Offered each semester. Prerequisites: CSCI 1060, 1201, 1203, 1205, or 1583. Assembly language programming and a survey of computer organization; structure of assemblers and loaders; introduction to operating systems. `,
           credits: 3,
          instructor: 'Professor Tamijdul Hoque',
           semesterCompleted: 'Spring 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2467,
           subjectCode: 'CSCI-2467',
           name: 'Systems Programming Concepts',
           description: `Prerequisites: CSCI 2120 and CSCI 2450. Introduction to the concepts and tools used in systems programming. Detailed examination of computer architecture and computer system services from a user's point of view. Topics include accessing system services such as process control, file management, and input-output, through system calls and shells. `,
           credits: 3,
          instructor: 'Matt Toups',
           semesterCompleted: 'Fall 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 3080,
           subjectCode: 'CSCI-3080',
           name: 'Ethics in the Computing Profession',
           description: `Prerequisites: CSCI 2125 and any CSCI 4000-level course. Professional societies; subjectCodes of ethics; accreditation and certification; liability; software piracy; information and property; copyright; computer crime; data bank privacy; the Data Protection Act; monopoly and anti-trust questions; robotics and employment issues; VDT's and public health issues; and Trans-National Data Flow. `,
           credits: 1,
          instructor: 'Professor Mahdi Abdelguerfi',
           semesterCompleted: 'Fall 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 3090,
           subjectCode: 'CSCI-3090',
           name: 'Undergraduate Seminar',
           description: `Offered each semester. Prerequisite: CSCI 2125 and any 4000-level CSCI course.  A seminar with topics presented by students, faculty, and guests. Students registering for the course must normally make a presentation to satisfy credit requirements. May be taken multiple times for credit. `,
           credits: 1,
          instructor: 'Professor Mahdi Abdelguerfi',
           semesterCompleted: 'Fall 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 3102,
           subjectCode: 'CSCI-3102',
           name: 'Introduction to the Theory of Computation',
           description: `Prerequisites: CSCI 2125 and MATH 3721. An  introduction to the theory of computation, including automata; computability, and complexity. Topics include automata and languages: decidability, reducability, and the Church-Turing thesis; complexity and intractability `,
           credits: 3,
          instructor: 'Professor Adlai Depano',
           semesterCompleted: 'Spring 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 3301,
           subjectCode: 'CSCI-3301',
           name: 'Computer Organization',
           description: `(ENEE 3583 and CSCI 3301 are cross-listed) Prerequisites: Credit or registration in ENEE 3582 and ENEE 3512, or credit in CSCI 2450. Concurrent enrollment in ENEE 3514 is required for students in the Computer Engineering Concentration. The design of digital computer systems is studied from the instruction set level, system architecture level, and digital logic level. Topics include: processor design and performance evaluation; instruction set design and addressing; data path design and pipelining; control structures and microprogramming; memory management, caches, and memory hierarchies; interrupts and I/O structures; introduction to parallel processing. `,
           credits: 3,
          instructor: 'Professor Tamijdul Hoque',
           semesterCompleted: 'Fall 2017',
           grade: 2
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 4000,
           subjectCode: 'CSCI-4000',
           name: 'Senior Comprehensive Exam',
           description: `Prerequisite: Senior status and consent of department. This is a required, zero-credit course that CSCI seniors must take by their final semester in order to graduate. This course meets twice: the first time for an organizational meeting, and the second time to take a comprehensive CSCI exam. `,
           credits: 0,
          instructor: 'Professor Tamijdul Hoque',
           semesterCompleted: 'Fall 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 4101,
           subjectCode: 'CSCI-4101',
           name: 'Analysis of Algorithms',
           description: `Prerequisite: CSCI 2125. Precise definition of the concept of an algorithm; techniques for algorithm verification; analyzing algorithm performance; applications to practical algorithms. `,
           credits: 3,
          instructor: 'Professor Adlai Depano',
           semesterCompleted: 'Fall 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 4125,
           subjectCode: 'CSCI-4125',
           name: 'Data Models and Database Systems',
           description: `Prerequisite: CSCI 2125. Methods, structures, and algorithms used for the organization, representation, and manipulation of large data bases; design and implementation of data base management systems. Students will be required to develop a large project in a team setting. `,
           credits: 3,
          instructor: 'Professor Shengru Tu',
           semesterCompleted: 'Fall 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 4990,
           subjectCode: 'CSCI-4990',
           name: 'Special Topics',
           description: `Prerequisite: CSCI 2125 or CSCI 2467. Design and implementation of advanced web-based applications.  Topics covered typically include:  HTTP protocol, multi-tier architectures, technologies for server-side and client-side implementation, database connectivity, XML, session handling, web services, scalability and security in the web context.  Substantial programming project involving the development of a database-backed web application. `,
           credits: 3,
          instructor: 'Brian Walters',
           semesterCompleted: 'Spring 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 4311,
           subjectCode: 'CSCI-4311',
           name: 'Computer Networks and Telecommunications',
           description: `Prerequisites: CSCI 2125 and CSCI 2450. Overview of modern computer communication networks covering the theoretic multi-layered model from the top down with an emphasis on working protocols and algorithms.  Topics include client-server model, common application protocols, connectionless and reliable transport, flow and congestion control, routing, switching, shared medium protocols, transmission media and network hardware. `,
           credits: 3,
          instructor: 'Professor Shaihk Arifuzzaman',
           semesterCompleted: 'Fall 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 4401,
           subjectCode: 'CSCI-4401',
           name: 'Principles of Operating Systems I',
           description: `Prerequisites: CSCI 2125 and CSCI 2467. An introduction to the organization of various types of operating systems; machine structure and the functions of an operating system; multiprogramming and time-sharing environments; memory management and resource allocation; virtual memory concepts; the file system and IO device handling; protection and error recovery. `,
           credits: 3,
          instructor: 'Professor Shaihk Arifuzzaman',
           semesterCompleted: 'Spring 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 4501,
           subjectCode: 'CSCI-4501',
           name: 'Programming Language Structure',
           description: `Prerequisite: CSCI 2125. A study of the concepts of programming languages as realized in a variety of commonly used languages, with emphasis on language definition and structure. `,
           credits: 3,
          instructor: 'Professor Adlai Depano',
           semesterCompleted: 'Fall 2017',
           grade: 4
          }
      ]
    },
    {
      firstName: 'Christopher',
      lastName: 'Wadsworth',
      degree: 'Undergraduate',
      status: 'Senior',
      curriculum_name: 'Computer Science',
      curriculum_subjectCode: 'CSCI',
      completedCourses: [
        {
           degree: 'Undergraduate',
           subjectNumber: 1581,
           subjectCode: 'CSCI-1581',
           name: 'Software Design and Development I Laboratory',
           description: `Prerequisite: Concurrent registration in CSCI 1583 is required. Two hours of laboratory each week to accompany CSCI 1583. Applications, exercises, and explorations in methodologies, software design, and development. `,
           credits: 1,
           instructor: 'Jake Barron',
           semesterCompleted: 'Fall 2016',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 1583,
           subjectCode: 'CSCI-1583',
           name: 'Software Design and Development I',
           description: `Prerequisite: MATH 1115 or higher with a grade of C or better; Eligibility for Math 1125 or higher, concurrent registration in CSCI 1581 is required. An introduction to software design and development using an object-oriented approach. Topics include designing specifying implementing and testing elementary classes; developing simple algorithms in an object-oriented programming language; programming-by-contract; implementing fundamental structural relations between classes. Intended primarily for Computer Science majors. Except as provided for in individual college policies a student may receive credit in only one of CSCI 1060, 1201, 1203, 1205, and 1583. `,
           credits: 3,
           instructor: 'Ted Holmberg',
           semesterCompleted: 'Fall 2016',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2120,
           subjectCode: 'CSCI-2120',
           name: 'Software Design and Development II',
           description: `Prerequisites: CSCI 1583 and 1581; concurrent registration in CSCI 2121 is required. (The successor course CSCI 2125 has MATH 3721 as a co-requisite; credit or concurrent registration in MATH 1116 or MATH 1126, which are prerequisites for MATH 3721, is therefore recommended).  A continuation of CSCI 1583 and 1581 with emphasis on algorithmic techniques and the structuring of larger systems. Topics include sorting and searching, recursion, inheritance and polymorphism, composition, abstract classes and interfaces, exception handling, and the model-view-controller structure. Three hours of lecture. `,
           credits: 3,
           instructor: 'Nathan Cooper',
           semesterCompleted: 'Spring 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2121,
           subjectCode: 'CSCI-2121',
           name: 'Software Design and Development II Laboratory',
           description: `Prerequisite: Concurrent registration in CSCI 2120 is required. Two hours of laboratory each week to accompany CSCI 2120. Applications, exercises, and explorations in methodologies for software design and development. `,
           credits: 1,
          instructor: 'Jake Barron',
           semesterCompleted: 'Spring 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2125,
           subjectCode: 'CSCI-2125',
           name: 'Data Structures',
           description: `Prerequisites: CSCI 2120 and 2121. Credit or concurrent registration in MATH 3721 is required. A continuation of CSCI 2120 and 2121 with emphasis on the design and implementation of structured data objects such as lists, stacks, queues, trees, and graphs; storage allocation for structured data objects. `,
           credits: 3,
           instructor: 'Professor Christopher Summa',
           semesterCompleted: 'Summer 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2450,
           subjectCode: 'CSCI-2450',
           name: 'Machine Structure and Assembly Language Programming',
           description: `Offered each semester. Prerequisites: CSCI 1060, 1201, 1203, 1205, or 1583. Assembly language programming and a survey of computer organization; structure of assemblers and loaders; introduction to operating systems. `,
           credits: 3,
          instructor: 'Professor Tamijdul Hoque',
           semesterCompleted: 'Spring 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 2467,
           subjectCode: 'CSCI-2467',
           name: 'Systems Programming Concepts',
           description: `Prerequisites: CSCI 2120 and CSCI 2450. Introduction to the concepts and tools used in systems programming. Detailed examination of computer architecture and computer system services from a user's point of view. Topics include accessing system services such as process control, file management, and input-output, through system calls and shells. `,
           credits: 3,
          instructor: 'Matt Toups',
           semesterCompleted: 'Fall 2017',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 3080,
           subjectCode: 'CSCI-3080',
           name: 'Ethics in the Computing Profession',
           description: `Prerequisites: CSCI 2125 and any CSCI 4000-level course. Professional societies; subjectCodes of ethics; accreditation and certification; liability; software piracy; information and property; copyright; computer crime; data bank privacy; the Data Protection Act; monopoly and anti-trust questions; robotics and employment issues; VDT's and public health issues; and Trans-National Data Flow. `,
           credits: 1,
          instructor: 'Professor Mahdi Abdelguerfi',
           semesterCompleted: 'Fall 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 3090,
           subjectCode: 'CSCI-3090',
           name: 'Undergraduate Seminar',
           description: `Offered each semester. Prerequisite: CSCI 2125 and any 4000-level CSCI course.  A seminar with topics presented by students, faculty, and guests. Students registering for the course must normally make a presentation to satisfy credit requirements. May be taken multiple times for credit. `,
           credits: 1,
          instructor: 'Professor Mahdi Abdelguerfi',
           semesterCompleted: 'Fall 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 3102,
           subjectCode: 'CSCI-3102',
           name: 'Introduction to the Theory of Computation',
           description: `Prerequisites: CSCI 2125 and MATH 3721. An  introduction to the theory of computation, including automata; computability, and complexity. Topics include automata and languages: decidability, reducability, and the Church-Turing thesis; complexity and intractability `,
           credits: 3,
          instructor: 'Professor Adlai Depano',
           semesterCompleted: 'Spring 2018',
           grade: 4
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 3301,
           subjectCode: 'CSCI-3301',
           name: 'Computer Organization',
           description: `(ENEE 3583 and CSCI 3301 are cross-listed) Prerequisites: Credit or registration in ENEE 3582 and ENEE 3512, or credit in CSCI 2450. Concurrent enrollment in ENEE 3514 is required for students in the Computer Engineering Concentration. The design of digital computer systems is studied from the instruction set level, system architecture level, and digital logic level. Topics include: processor design and performance evaluation; instruction set design and addressing; data path design and pipelining; control structures and microprogramming; memory management, caches, and memory hierarchies; interrupts and I/O structures; introduction to parallel processing. `,
           credits: 3,
          instructor: 'Professor Tamijdul Hoque',
           semesterCompleted: 'Fall 2017',
           grade: 2
          },
          {
           degree: 'Undergraduate',
           subjectNumber: 4000,
           subjectCode: 'CSCI-4000',
           name: 'Senior Comprehensive Exam',
           description: `Prerequisite: Senior status and consent of department. This is a required, zero-credit course that CSCI seniors must take by their final semester in order to graduate. This course meets twice: the first time for an organizational meeting, and the second time to take a comprehensive CSCI exam. `,
           credits: 0,
          instructor: 'Professor Tamijdul Hoque',
           semesterCompleted: 'Fall 2018',
           grade: 4
          }
      ]
    }
  ],

  insertMajors: function() {
    majors.forEach(major => {
      const newMajor = new Major(major);
      newMajor.save((err, res) => {
        if (err) return console.error(err);
      });
    })
  },

  insertFullCourses: function() {
    fullCourses.forEach(course => {
      const insertCourse = new Course(course);
      insertCourse.save((err, res) => {
        if (err) return console.error(err);
      })
    });
  },

  insertStudents: function() {
    this.students.forEach(student => {
      const insertStudent = new Student(student);
      insertStudent.save((err, res) => {
        if (err) return console.error(err);
      })
    });
  }
}