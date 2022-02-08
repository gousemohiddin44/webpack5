import "./styles/index.css";

const obj1 = {
    random: '1',
    random2: 2,
};

const obj2 = {
    ...obj1,
    random3: '3',
}

console.log(obj1);
console.log(obj2);