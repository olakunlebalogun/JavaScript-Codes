const users = [
    { id: 1, name: 'john'},
    { id: 2, name: 'susan'},
    { id: 3, name: 'anna'}
]

const articles = [
    { userid: 1, articles: ['one', 'two', 'three']},
    { userid: 2, articles: ['four', 'five']},
    { userid: 3, articles: ['six', 'seven', 'eight','nine']}
]

// Using Promises 
getUser('susan')
.then((user) => getArticle(user.id))
.then((articles) => console.log(articles))
.catch((err) => console.error(err))




// Using Async - Await Statically
// const getData = async () => {
//     const user = await getUser('susan')
//     if(user){
//         const articles = await getArticle(user.id)
//         console.log(articles);
//     }
// }
// getData()


// Using Async - Await with Parameter passed 
const getData = async (name) => {
    const user = await getUser(name)
    if(user){
        const articles = await getArticle(user.id)
        console.log(articles);
    }
}
getData("john")


function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user)=> user.name === name)

        if (user) {
            return resolve(user)
        } else {
            reject(`No such user with name ${name}`)
        }
    })
}

function getArticle(userid){
    return new Promise((resolve, reject)=>{
        const userArticle = articles.find((user)=> user.userid === userid)

        if (userArticle){
            return resolve(userArticle.articles)
        } else {
            reject(`Wrong ID`)
        }
    })


}