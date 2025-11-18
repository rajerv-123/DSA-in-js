function climbingProblem(n){
    const onOfClimb = [1,2];
    for(let i = 2; i<=n; i++){
        onOfClimb[i] = onOfClimb[i-1] + onOfClimb[i-2]
    }
    return onOfClimb[n-1]
}

console.log(climbingProblem(1))
console.log(climbingProblem(2))
console.log(climbingProblem(3))
console.log(climbingProblem(4))
console.log(climbingProblem(5))


