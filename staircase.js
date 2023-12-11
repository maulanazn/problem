function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let result = "#";
        let space = ' ';
        console.log(space.repeat((n-i)) + result.repeat(i))
    }

}

staircase(6)