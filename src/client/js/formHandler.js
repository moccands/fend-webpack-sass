function updateUI(text) {
  document.getElementById('results').innerHTML = text;
}

export { updateUI }

function getValueFromForm() {
  return document.getElementById('name').value;
}

export {getValueFromForm}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = getValueFromForm();
    if (Client.checkForName(formText)) {
      console.log("::: Form Submitted :::")
      postData('http://localhost:8081/analyseText', {data : formText }).then(function(res) {
        updateUI(res.polarity);
      })
    }
    else {
      updateUI("Invalid Entry");
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