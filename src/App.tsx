
import './App.css';
import InputField from './components/input fields/input fields';
import Filtration from './components/input fields/filtration';
import OutputTable from './components/output table';

function App() {
  return (
    <div className="App">
        <InputField/>
        <Filtration/>
        <OutputTable/>
     </div>
  );
}

export default App;
