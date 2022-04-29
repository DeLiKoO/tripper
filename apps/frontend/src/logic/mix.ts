export default function mix<T>(_ar1: Array<T>, _ar2: Array<T>) {
    const result = [];
    let ar1 = [..._ar1];
    let ar2 = [..._ar2];
    while(ar1.length > 0) {
        result.push(ar1.shift());
        if(ar2.length > 0) {
            result.push(ar2.shift());
        }
    }
    return result;
}