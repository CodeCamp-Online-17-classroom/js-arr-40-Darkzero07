// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array = [
  { name: "Ben", age: 14 },
  { name: "Phil", age: 18 },
  { name: "John", age: 32 },
  { name: "Ann", age: 16 },
  { name: "Paul", age: 24 },
];

const array2 = array.filter((arr) => {
  if (arr.age >= 18) {
    return arr;
  }
});
console.log(array2)
// อายุไม่น้อยกว่า 18
