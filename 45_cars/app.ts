import { features } from "process";

function storeCarInfo(manufacture: string, modelName: string, ...extraOption: { [key : string]: any}  []):
object {
    const carInfo ={
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;
};

let answer = storeCarInfo('Honda','Civic',{colour:'black'},{features: ['Navigation', 'Power window']})

 console.log(answer); 