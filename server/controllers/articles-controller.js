

// const HTTP = new XMLHttpRequest();
const Url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d8f7e7fb04d49f8b5afc10db6e05367";
fetch(Url)
    .then(data=>{return data.json()})
    .then((res) => {
        router.post('/articles', async (res, req) => {
            res.forEach((article) => {
                try {
                    let newArticle = Article.create(
                        Object.assign(req.body)
                    )
                    return res.json(newArticle)
                } catch (e){
                    return res.status(400).send(e)
                }
            })
        })
    })
    
    

// HTTP.open("GET", url);
// HTTP.send();

// HTTP.onreadystatechange = (e) => {
//     console.log(HTTP.responseText)
// }