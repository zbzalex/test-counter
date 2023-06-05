var createCounter = function(n) {
    let counter = n
    return function() {
        return n++;
    };
};

const counter = createCounter(-2)

console.log(counter()) // -2
console.log(counter()) // -1
console.log(counter()) // 0
