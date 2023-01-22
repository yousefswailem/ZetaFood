import Home from './pages/home/Home';

const handleChange = (updatedData) => {
  console.log(updatedData)
  console.log(updatedData)
}

function App() {
  return (
    <>
    <div >
     <Home onChange={handleChange}/>
    </div>
    </>
  );
}

export default App;
