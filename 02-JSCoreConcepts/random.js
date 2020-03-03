const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createArray = (size) => {
    array = [];
    for(let i = 0; i < size; i++) {
        array.push(getRandomInt(5, 20));
    }
    return array;
};


array = createArray(10);
array.forEach(item => console.log(item));