/*
    index.js: webpack入口起点文件
    1、运行指令：
       开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
       生成环境：webpack ./src/index.js -o ./build/built.js --mode=production
*/

function add(x, y) {
    return x+y
}

console.log(add(1, 2))