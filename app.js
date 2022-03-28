const posts =[{name:'james',age:22},
{name:'mussa',age:37}
] 

function createPost(post,callback) {
    setTimeout(function() {
        posts.push(post);
        callback()
    },3000)
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
