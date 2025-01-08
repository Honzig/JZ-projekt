import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar()
{
  return(
        <header className="header row">
            <nav className="navbar col navbar-expand-lg ps-3 pe-3 bg-dark-subtle">
              <a className="navbar-brand" href="null">Navbar</a>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse bg-light">
                <div className="navbar-nav">
                  <a className="nav-item nav-link" href="null">Home</a>
                  <a className="nav-item nav-link" href="null">Features</a>
                  <a className="nav-item nav-link" href="null">Pricing</a>
                  <a className="nav-item nav-link" href="null">Disabled</a>
                </div>
              </div>
            </nav>
        </header>
  );
}

function Footer()
{
  return(
        <footer className="footer row">
          <div className='col ps-3 pe-3 bg-dark-subtle'>
            <p>footer</p>
          </div>
        </footer>
  );
}

function App() {
  return(
    <div className='container-fluid'>
      <Navbar></Navbar>
      <div className='temp'></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
