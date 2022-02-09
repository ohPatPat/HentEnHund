
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
     document.querySelector(".dogPic").setAttribute("src", `${data.message}`)
  })

  .catch(function() {
console.log("Error, couldnt fetch");  
});



function refresh() {
    location.reload();  }