
// document.addEventListener('DOMContentLoaded', ()=> {
//     // document.getElementById('popout').style.display = 'none';


//     fetch("https://cataas.com/api/cats")
//         .then(function (data) {
//             return data.json()
//         })
//         // .then(function (countries) {
//         .then(function (cats) {
//             // For Country Name 
//             var ul = document.getElementById("list")
//             // countries.forEach(function (country) {
//             cats.forEach(function (cat) {
//                 var div = document.createElement("div")
//                 div.className='card col-10 m-2'

//                 //For Cat Id
//                 var h5 = document.createElement("h5")
//                 h5.innerHTML = "Cat ID : " + cat.id 

//                 //For Created_At
//                 var p = document.createElement("p")
//                 p.innerHTML = "Created_At : " + cat.created_at

//                 // var para = document.createElement("p")
//                 // para.innerHTML ="Region: " + country.tags[0]
//                 // para.innerHTML ="Region: " + country.tags[1]

//                  //For Button
//                  var btn = document.createElement("button")
//                  btn.innerHTML= "Click For Details";
//                  btn.addEventListener('click', () => {
//                      getpopupdata(country.name.common);
//                  })

//                 ul.appendChild(div)
//                 div.appendChild(h5)
//                 div.appendChild(p)
//                 // div.appendChild(para)
//                 div.appendChild(btn)


//           }) 
//         }) 
//         .catch(function (err) {
//             console.log(err)
//         });
//     })


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('close-btn').style.display = 'none';

    async function fetchData() {
        try {
            var data = await fetch('https://cataas.com/api/cats')
            var data1 = await data.json()
            fetchCat(data1)
            console.log("inside fetchdata")

        } catch (error) {
            console.log(error)
        }
    }

    function fetchCat(data) {
        for (const cat of data) {
            var ul = document.getElementById("list")

            //For Div
            var div = document.createElement("div")
            div.className = 'card col-10 m-2'

            //For Heading (Cat ID)
            var h5 = document.createElement("h5")
            h5.innerHTML = "Cat ID: " + cat.id

            //For Created_At
            var p = document.createElement("p")
            p.innerHTML = "Cat Created_At: " + cat.created_at

            // var para = document.createElement("p")
            // para.innerHTML ="Region: " + country.tags[0]
            // para.innerHTML ="Region: " + country.tags[1]

            //For Button
            var btn = document.createElement("button")
            btn.innerHTML = "Click For Image/Gif";
            btn.addEventListener('click', () => {
                getpopupImg(cat.id);
            })

            ul.appendChild(div)
            div.appendChild(h5)
            div.appendChild(p)
            // div.appendChild(para)
            div.appendChild(btn)

        }

    }

    function getpopupImg(q) {
        console.log("inside getpopupImg")
        document.getElementById('pop').style.display = 'flex';
        document.getElementById('close-btn').style.display = 'flex';
        const catImg = document.getElementById("cat-img")
        const pop = document.querySelector('#pop');
        const div = document.createElement('div');
        catImg.src = "https://cataas.com/cat/" + q;

        pop.appendChild(div)
        div.append(catImg)

        //    div.appendChild(btn)
    }

    document.getElementById('close-btn').addEventListener('click', () => {
        document.getElementById('pop').style.display = 'none';
        // document.getElementById('cat-img').style.display = 'none';
    })


    fetchData();

})
