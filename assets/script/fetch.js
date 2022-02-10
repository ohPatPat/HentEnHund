
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
     document.querySelector(".dogPic").setAttribute("src", `${data.message}`)
  })

  .catch(function() {
    //Indhold ved offline
    window.location.href = "https://ohpatpat.github.io/HentEnHund/info.html";
  });



