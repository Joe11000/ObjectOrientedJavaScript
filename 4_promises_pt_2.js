const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

// function getTop100Campers() {
//   fetch(apiUrl).then( r => r.json())
//                .then(json => console.log(json[0]))
//                .catch(error => console.log('failed')) 
// }

async function getTop100Campers() {
  const response = await fetch(apiUrl);
  const json = await response.json();
}

getTop100Campers()