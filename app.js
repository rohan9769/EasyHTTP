const http = new easyHTTP;

// GET METHOD

// Get Posts
// const posts = http.get('https://jsonplaceholder.typicode.com/posts',
//     function(err,posts){
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(posts)
//         }
//     }
// )

// Get Single Post
// const post = http.get('https://jsonplaceholder.typicode.com/posts/1',
//     function(err,post){
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(post)
//         }
//     }
// )

// POST METHOD
// Creating data
const data = {
    title:'Custom Post',
    body:'This is a custom post by Ron'
};

// Creating Post
// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(post)
//     }
// })

// PUT METHOD
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(post)
//     }
// })


// DELETE METHOD
http.delete('https://jsonplaceholder.typicode.com/posts/1',
    function(err,response){
        if(err){
            console.log(err)
        }
        else{
            console.log(response)
        }
    }
)