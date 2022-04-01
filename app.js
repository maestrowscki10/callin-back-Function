const posts =[{name:'james',age:22},
{name:'mussa',age:37}
] 

function createPost(post) {
    return new Promise(function(resolve,reject){

        setTimeout(function() {
            posts.push(post);
            const error = false
            if (!error){
                resolve()
            } else {
            reject('error: Something went wrong')
            }
        },3000)
    })
   
}




function getPost() {
    setTimeout(function() {
        let output =""
        posts.forEach(post => {
           output += `<li>${post.name}</li> `
        });
        document.body.innerHTML = output
    },25000)
 
}
createPost({name:'rodri',age:22},getPost)
.then(getPost)
.catch(function(err){
    console.log(err);
})
