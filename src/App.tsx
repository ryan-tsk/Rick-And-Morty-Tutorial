import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainPage from './components/MainPage'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import useAPI from './hooks/useAPI'

function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <h1 className='text-center mb-4 text-primary'> Characters </h1>
      <QueryClientProvider client={queryClient}>
      <div className='container'>
        <div className='row'>
        <MainPage></MainPage>
        </div>
      </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;

/*
<h1 className='text-center mb-4 text-primary'> Characters </h1>
<div className='container'>
  <div className='row'>
  </div>
</div>
*/