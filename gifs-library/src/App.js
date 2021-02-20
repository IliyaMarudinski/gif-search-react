import './App.css';
import {Route, Switch } from 'react-router-dom';
import Main from './components/main'
import {GifsContainer as Gifs} from './components/pages/gifs/gifs.container'
import {GifsProfileContainer as GifProfile} from './components/pages/gifs/gifsProfile/gifsProfile.container'

function App() {
  return (
    <div className="App">      
      <main>
      <Main>
          <Switch>          
              <Route path="/" component={Gifs} exact />
              <Route path="/profile/:id" component={GifProfile} />          
          </Switch>
        </Main>
      </main>
    </div>
  );
}

export default App;
