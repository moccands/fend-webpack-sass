
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) {
      console.log("::: Form Submitted :::")
      postData('http://localhost:8081/analyseText', {data : formText }).then(function(res) {
            document.getElementById('results').innerHTML = res.polarity
      })
    }
    else {
      document.getElementById('results').innerHTML = "Invalid Entry";
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
    document.getElementById('results').innerHTML = error;
  }
}

export { handleSubmit }