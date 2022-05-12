// document.querySelector("#newBlog").addEventListener("submit",e=>{
//     e.preventDefault()
//     const blogObj = {
//         title:document.querySelector("#title").value,
//         name:document.querySelector("#body").value,
//     }
//     console.log(blogObj)
//     if(!blogObj.title && !blogObj.body){
//         alert('please input some content')
//         return;
//     }else {
//     fetch("/api/playlist",{
//         method:"POST",
//         body:JSON.stringify(blogObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//            location.reload()
//         } else {
//             alert("sorry something wrong")
//         }
//     })
// }
// })

document.querySelector('h1').innerHTML = "it link"