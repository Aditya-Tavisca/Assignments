export class FirstNElements {
    first(array:number[], n:number = 1) {
        if (n > 0)
            return array.slice(0, n);
        else
            return [];
    }

    firstwithLogic(array:number[], n:number = 1) {
        if (n <= 0)
            return [];
        else {
            let firstNElements = [];
            if (n > array.length) {
                n = array.length;
            }
            for (let i = 0; i < n; i++) {
                firstNElements.push(array[i]);
            }
            return firstNElements;
        }
    }
}