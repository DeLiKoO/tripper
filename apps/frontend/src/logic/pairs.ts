export default function pairs<T, O>(array: Array<T>, cb: (a: T, b: T) => O) {

    let result: O[] = [];
    let from: T = undefined;
    let to: T = undefined;

    for (const item of array) {
        from = to;
        to = item;
        if(from === undefined) continue;
        result.push(cb(from, to));
    }

    return result;

}