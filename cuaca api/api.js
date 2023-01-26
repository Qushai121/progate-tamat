const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e6e20cb1f9msh470d23aee685ea2p1190e8jsndb1180d70614',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


const cari = () => {
	const hasili = document.getElementById('input').value
	const uhuy = document.getElementById('card2')
	const judul =`<h1>${hasili}</h1>`
	uhuy.innerHTML = judul
	if (hasili == " ") {
		location.reload()
	}

	fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${hasili}&days=3`, options)
		.then(response => response.json())
		.then(response => {
			const mulai = response;
			const cepet = mulai.location
			const jam = cepet.localtime
			const suhu = mulai.current.feelslike_c
			const tempat = cepet.country
			const gambar = mulai.current.condition.icon
			const deskripsi = mulai.current.condition.text
			const kota = cepet.region
			const hari = mulai.forecast.forecastday

			
			let listOfElement = ""
			
			hari.forEach(harijadi => {
				console.log(hasili)
				const dalemjadi = {
					tanggal: harijadi.date,
					status: harijadi.day.condition.text,
					gambar: harijadi.day.condition.icon,
					suhu: harijadi.day.avgtemp_c
				}
				console.log()
				const divnya = document.getElementById('card1')

				const element = `<div id="card">
				<h1>${tempat}</h1>
				<h2>${dalemjadi.status}</h2>
				<div class="gambar" >
				<img src="${dalemjadi.gambar}"/>
				<h3>${dalemjadi.suhu}</h3>
				</div>
				<p>${kota}</p>
				<p>${dalemjadi.tanggal}</p>
				</div>`
				
				listOfElement += element;
				divnya.innerHTML = listOfElement
			})


		})
		.catch(err => console.error(err));
}




