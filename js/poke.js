function buscar(){
    let id = window.document.getElementById("search").value
    id = id.toLowerCase()
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    

    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // dados no formato json
        console.clear()
        console.log(data)

        let nome = data['name']
        let pid = data['id'] 
        let sprite = data['sprites']['front_default']

        window.document.getElementById('p-nome').innerHTML = nome
        window.document.getElementById('img').src = sprite
        window.document.getElementById('p-num').innerHTML = pid

    })
    .catch((erro) => {
        console.log(`ERROR: ${erro}`)
        alert('Nome do pokemon errado Pokemon')
    })


}


