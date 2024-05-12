function storeCarInfo(manufacture, modelName, ...extraOption) {
    const carInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let answer = storeCarInfo('Honda', 'Civic', { colour: 'black' }, { features: ['Navigation', 'Power window'] });
console.log(answer);
export {};
