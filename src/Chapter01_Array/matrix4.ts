const matrix4x4x4x4: Array<any> = []


for (let i: number = 0; i < 4; i++) {
    matrix4x4x4x4[i] = []
    for (let j: number = 0; j < 4; j++) {
        matrix4x4x4x4[i][j] = []
        for (let k: number = 0; k < 4; k++) {
            matrix4x4x4x4[i][j][k] = []
            for (let l: number = 0; l < 4; l++) {
                matrix4x4x4x4[i][j][k][l] = `${i} ${j} ${k} ${l}`
            }
        }
    }
}

console.log(JSON.stringify(matrix4x4x4x4));
