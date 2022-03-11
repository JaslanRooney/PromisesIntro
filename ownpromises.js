// fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if(rand < 1000) {
//                 resolve('YOUR FAKE DATA HERE');
//             }
//             reject('REQUEST ERROR');
//         }, 1000)
//     })
// }

// async function makeTwoRequests(){
//     try {
//         let data1 = await fakeRequest('/page1');
//         console.log(data1);
//         let data2 = await fakeRequest('/page2');
//         console.log(data2);
//     } catch (e) {
//         console.log("CAUGHT AN ERROR")
//         console.log("error is:", e)
//     }
    
// }

// try {
//     asdiadd.log('asda')
// } catch (e) {
//     console.log("its ok", e)
// }


// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("DONE WITH REQUEST")
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log("OH NO", err)
//     })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return "ALL DONE!"
// }

// rainbow().then(() => console.log("END OF RAINBOW"))


    
// const data = {"ticker":{"base":"BTC","target":"USD","price":"42999.00611088","volume":"30815.15546401","change":"65.12518398"},"timestamp":1641520862,"success":true,"error":""}
// JSON.parse(data)
// JSON.stringify(dog)

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log("RESPONSE, WAITING TO PARSE", res)
//     return res.json()
// })
// .then(data => {
//     console.log("DATA PARSED")
//     console.log(data.ticker.price)
    
// })
// .catch(e => {
//     console.log("OH NO< THERE'S AN ERROR!", e)
// })


// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//         const data = await res.json()
//         console.log(data.ticker.price)
//     } catch(e) {
//         console.log("SOMETHING WRONG", e)
//     }
// }


axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log(res.data.ticker.price)
})
.catch(err => {
    console.log("ERROR", err)
})

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch(e) {
        console.log("ERROR", e)
    }
}
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try {
        const config = { headers: {Accept:'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    } catch (e) {
        return "NO JOKES AVAILABLE"
    }    
}

button.addEventListener('click', addNewJoke)

