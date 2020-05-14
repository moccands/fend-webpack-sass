const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip='
const apiKey = '&appid=7410715a75a449f7c6e0c4f207575f6e&units=imperial';
const newZip = 10010;
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    /*getZip(baseURL,newZip, apiKey)
    .then(function(data) {
        document.getElementById('results').innerHTML = data.list[0].main.temp;
        console.log(data.list[0].main.temp);
    });*/
    postData('http://localhost:8081/analyseText', {data : formText }).then(function(res) {
          document.getElementById('results').innerHTML = res.message
      })
}

const getZip = async (baseURL, zip, key)=>{

  const res = await fetch(baseURL+zip+key)
  try {
    const data = await res.json();
    console.log("res", data);

    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}


const postData = async ( url = '', data = {})=>{
  const response = await fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header        
});

  try {
    const newData = await response.json();
    console.log(newData);
    return newData
  }catch(error) {
  console.log("error", error);
  // appropriately handle the error
  }
}

export { handleSubmit }