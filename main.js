

document.getElementById('getData').addEventListener('click', getTheData)

function getTheData() {
    console.log('This button was pressed.. here is your data')


let routes;

const apiURL ='https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=37.727839&lon=-83.635396&maxDistance=100&minDiff='

let gradeMin = document.getElementById("gradeMin").value 
let gradeMax = document.getElementById("gradeMax").value 
const url = apiURL + gradeMin + "&maxDiff=" + gradeMax + "&key=200424196-5fdf40349774a101d0c0d762b625f5b1"

let results = fetch(url);
    results.then(
        function(x) {
        return x.json();
        }
    )
    .then(function(data){
        //routes = y;
        let routes =
        ` `
        console.log(data);
        data.routes.map(function(n){
            routes += `
				<table>
	<tr>
    <th>Route</th>
    <th>Grade</th> 
    <th>Type</th>
	<th>Location</th>
  </tr>
  <tr>
    <td>${n.name}</td>
    <td>${n.rating}</td> 
    <td>${n.type}</td>
	<td>${n.location[2]}</td>
  </tr>
 
</table>
            `
        })
        
            
       console.log(data.routes.length);
        //console.log(count);
       document.getElementById('myRoutes').innerHTML = routes

    })

}