function average(ages) {
    const total = ages.reduce((age, total=0) => total + age);
    const length = ages.length;
    return total / length;
}

function square(num) {
    return num * num;
}
