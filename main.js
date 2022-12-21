let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
// for(i=0;i<studentRecords.length;i++){
//     console.log(studentRecords[i].name.toLocaleUpperCase());
// }
 const a = studentRecords.map(item => item.name.toUpperCase())
 console.log(a);

 //2.

 const b = studentRecords.filter(item => item.marks>50);
 console.log(b);

 //3.
 const c= studentRecords.filter(item=>item.marks>50 && item.id>120);
 console.log(c);

 //4.
 const arr1=[]
 for(var i=0;i<studentRecords.length;i++){
    arr1.push(studentRecords[i].marks)
 }
 console.log(arr1);
 sum=0
 for(let i=0;i<arr1.length;i++){
    sum+=arr1[i]
 }
 console.log(sum);
 
//5.
for(let i=0;i<studentRecords.length;i++){
    if(studentRecords[i].marks>50){
        console.log(studentRecords[i].name);
    }
}

//6.
const d=studentRecords.filter(item=>item.id>120)
console.log(d);
SUM=0
for(let i=0;i<d.length;i++){
    SUM+=d[i].marks
}
console.log(SUM);

//7.
// const f=studentRecords.filter(item=>item.marks<50);
// console.log(f);
// for(let i=0;i<f.length;i++){
//     f[i].marks=f[i].marks+15

// }
// console.log(f);
// sum=0
// for(var i=0;i<f.length;i++){
//     if(f[i].marks<50){
//         // f[i].marks=f[i].marks+15
//         // studentRecords.marks=f[i].marks+15
//     }
//     // sum+=f[i].marks
//     studentRecords.marks=f[i].marks+15
//     console.log(studentRecords);
// }
// for(let j=0;j<studentRecords.length;i++){
//     if(studentRecords[j].marks>50){
//       studentRecords[i].marks=studentRecords.marks+15
//     }
    
// }
// console.log(sum);


var u=studentRecords.filter((item)=>item.marks>50)
var u1=u.map((item)=>item.marks)
var u2=u1.reduce((x,y)=>x+y,0)
console.log(u2);

