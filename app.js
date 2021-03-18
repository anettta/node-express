// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>  (mac)


// package.json - manifest file
// npm init (step by step)
// npm init -y (everything default)

// const _ = require('lodash');

// const items = [1,[2,[3,[4]]]]

// const newItems = _.flattenDeep(items);

// console.log(newItems);

// console.log('hello people');

const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data) => {
    if (err) {
        reject(err)
    } else {
        resolve(data)
    }
    })
  })
}


const start = async()=>{
    try {
        const first = await getText('./content/first.txt')
         const second = await getText('./content/second.txt')
   console.log(first, second)
} catch (error) {
    console.log(error)
}
}

start()

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))