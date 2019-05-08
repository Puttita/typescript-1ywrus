// example
const numberArray: number[] = [1,2,3,4,5];
const stringArray: string[] = ['EN','TH'];
const anyArray: any[] = [1,2,3,'EN','TH'];

// สร้าง type เป็น interface
interface DepartmentType {
  departmentName: string;
  departmentCode: string;
  status: number
}

// สร้าง array ด้วย type ใหม่
const departmentArray: DepartmentType[] = [
  {departmentName:'Union',departmentCode:'UN',status:1},
  {departmentName:'United Stated',departmentCode:'USA',status:1},
  {departmentName:'China',departmentCode:'CHI',status:2}
]
//ตัวอย่าง
type Program = {programName:string,programId:number};
const program = {program:'SA011',programId:233};
const programList:Program[]=[
  {programName:'SA011',programId:233},
  {programName:'SA011',programId:233},
  {programName:'SA011',programId:233}
];
// สร้าง type ใหม่ด้วย keyword 'type'
type FaveGundamType = 'Exia'|'OO'|null;
const faveGundamArray: FaveGundamType[] = ['Exia','Exia',null,'OO'];

//โจทย์ สร้าง type ใหม่ให้ object นี้ทดลองประกาศเป็น array
const employee = {name:'Mark',surname:'Suck',id:20};
//คำตอบ
type Nam = {name:string,surname:string,id:number};
const Ms:Nam[]=[
  {name:'Mark',surname:'Suck',id:20}
  ]
  console.log(Ms);
//โจทย์ สร้าง type ใหม่ให้กับ arrow function นี้
const array = (data:string[]) =>{
  return data.filter(i=>i.startsWith('x'));
}
//คำตอบ
type arry = (data:string[])=>string[]

//ตัวอย่าง
type Coordinate = {x:number,y:number};
type MyMock = {result:Coordinate[]};
const mockExample = {result:[
 {x:10,y:20},
 {x:2,y:30},
 {x:3,y:40}
]};
// โจทย์ สร้าง type ให้ object นี้
const mock = {
  response : [{
  name: 'Thanadit',
  status: 1
},{
  name: 'Buthong',
  status: 2
},{
  name: 'Otoya',
  status: 3
}]};
//คำตอบ 
type Van = {name:string,status:number};
type Man = {response:Van[]};
const moc:Man = {
  response : [{
  name: 'Thanadit',
  status: 1
},{
  name: 'Buthong',
  status: 2
},{
  name: 'Otoya',
  status: 3
}]};
console.log(moc);
