const ages = [26, 27, 18, 56, 80, 96, 119, 39, 34, 2];
let minors = [];
let majors = [];

let filterMax = Math.max(...ages);
let filterMin = Math.min(...ages);

if( filterMax < 120 && filterMin > 1) {

    for(const i of ages) {
    if(i >= 60) {
            majors.push(i)
        } else {
            minors.push(i);
        }
    }
    
    let maxAge = Math.max(...majors);
    let minAge = Math.min(...minors);
    let quantityMajors = majors.length;
    let quantityMinors = minors.length;
    let promedium = (ages.reduce((a, b) => a + b, 0)/ages.length);
    console.log(`La cantidad de personas menores son ${quantityMinors}`);
    console.log(`La cantidad de personas mayores son ${quantityMajors}`);
    console.log(`La edad más baja es ${minAge}`);
    console.log(`La edad más alta es ${maxAge}`);
    console.log(`El promedio de las edades es ${promedium}`)

} else {
    console.log('Error, la edad ingresada debe ser menor a 120 y mayor de 1');
}

