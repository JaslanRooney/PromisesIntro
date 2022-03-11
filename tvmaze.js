// const form = document.querySelector('#searchForm')
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = { params: { q: searchTerm, isFunny: 'colt' } }
//     const res = await axios.get(`https://api.tvmaze.com/search/shows?q=$`, config);
//      makeImages(res.data)
//      form.elements.query.value = '';
     
// })

// const makeImages = (shows) => {
//     for(let result of shows) {
//         if(result.show.image) {
//             const img = document.createElement('IMG');
//         img.src = result.show.image.medium
//         document.body.append(img)
//         }
        
//     }
// }

function Color(r,g,b) {
 this.r =r;
 this.g = g;
 this.b = b;
 console.log(this);
}

new Color(255,40,100);


class Color {
    constructor(){
        
    }
}