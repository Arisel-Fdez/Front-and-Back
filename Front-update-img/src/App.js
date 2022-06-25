import { useState} from 'react';
import './App.css';

function App() {

  const [file, setFile] = useState(null)

  const selectedHandler = e => {
    setFile(e.target.files[0])
  }

  const sendHandler = () => {
    if(!file){
      alert('you must upload file')
      return
    }

    const formdata = new FormData()
    formdata.append('image', file)

    fetch('http://localhost:3000/images/post', {
      method: 'POST',
      body: formdata
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => {
      console.error(err)
    })

    document.getElementById('fileinput').value = null

    setFile(null)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Welcome Upload File</h1>
      <span class="border border-primary">
      <div class="input-group-file">
      <input type="file" name='file' class="form-control" onChange={selectedHandler} id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"></input>
      </div>
      <br />
      <div class="input-group">
      <button class="btn btn-outline-primary" onClick={sendHandler} type="button"  id="inputGroupFileAddon04">Button</button>
      </div></span>
      </header>
    </div>
  );
}

export default App;
