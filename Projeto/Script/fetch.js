//fetch retorna uma promise
function loadPosts(){ 
  document.getElementById("posts").innerHTML = 'Carregando . . . ';

  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(resultado){
         return resultado.json();
      })
      .then(function(json){
         montarBlog(json); 

         document.getElementById("posts").innerHTML = json.length+ ' posts';
      })
      .catch(function(error){
        console.log("deu erro!");
      })
}



