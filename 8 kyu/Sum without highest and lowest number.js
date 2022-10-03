function sumArray(array) {
    return Array.isArray(array) == false || array == null || array.length <= 2 ? 0 : array.reduce((a,b) => a+b, 0) - (Math.max(...array) + Math.min(...array))
    }