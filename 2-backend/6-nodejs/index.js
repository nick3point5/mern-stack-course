fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=1").then((res)=>{
	return res.json()
}).then((res)=>{
	console.log(res)
})


