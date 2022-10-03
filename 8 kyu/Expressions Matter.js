function expressionMatter(a, b, c) {
    let z =[a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c]
    return Math.max(...z)
    }