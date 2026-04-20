interface User{
    name: string
    age: number
    isOnline: boolean
}
 
const user: User = {
    name: "Alice",
    age:30,
    isOnline:true,
}

console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Online: ${user.isOnline}`);
