import React from 'react';
import './App.css';

function App() {
  const items = ['Apple', 'Banana', 'Cherry'];

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    alert('Form submitted!');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* ✅ JSX me comment likhne ka sahi tarika */}
        <h1>My Fruit List</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* ✅ Form with submit */}
        <form onSubmit={handleSubmit}>
          <label>
            User Name: 
            <input type="text" name="username" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <hr />
        <h2>Class-based Component Example</h2>
        <AppClass />
      </header>
    </div>
  );
}

// 🔁 Class-based component ko alag define karna hota hai, function ke bahar
 class AppClass extends React.Component {
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <label>Enter Text: </label>
          <input 
            type="text"
            onChange={this.onInputChange}
          />
          
        </form>
      </div>
    );
  }
}
      
const numbers = [1, 2, 3, 4, 5];
const updatedNums = numbers.map((number, index) =>
    <li key={index}>
        {number}
    </li>
);
console.log(updatedNums);

export default App;
