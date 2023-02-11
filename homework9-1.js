const xmlParser = `
 <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>

`;

const xmlDocument = new DOMParser().parseFromString(xmlParser, "text/xml");
const lists = xmlDocument.querySelectorAll('student');
   for(const student of lists){

     const name = student.querySelector('name');
     const age = student.querySelector('age');
     const prof = student.querySelector('prof');
     const langAttr = name.getAttribute('lang');
      
      const list = {
        name: name.textContent,
        age: age.textContent,
        prof: prof.textContent,
        lang: langAttr
        }
       console.log("List", list)
   
   }