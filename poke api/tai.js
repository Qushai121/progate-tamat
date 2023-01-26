async function pencetSir() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
      method: "GET"
  });
  const hasil = document.getElementById('hasil')
  

  const json = await response.json();
  const nama = json.name;
  const id = json.id;
  const tipe = json.types[0].type.name;
  const gambar = json.sprites.front_default;
 


  
  jadinya();
  // console.log(json.types[0].type.name)
  
  function jadinya () {
    hasil.innerHTML = `<h3 class="gg">${id} : ${nama}</h3> 
    <img  src="${gambar}"/>
    <p>type : ${tipe}</p>`
    // hasil.innerHTML = `<img src="${gambar}"/>`
  }
  
}



