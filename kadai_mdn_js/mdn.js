const Today = new Date();

const year = Today.getFullYear();
const month = Today.getMonth()+1;
const day = Today.getDate();

console.log(year+'年', month+'月', day+'日');
