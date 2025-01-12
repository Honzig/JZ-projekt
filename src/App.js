import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar()
{
  return(
        <header className="header row">
            <nav className="navbar col navbar-expand-lg ps-3 pe-3 bg-dark-subtle">
              <a className="navbar-brand ms-2 p-2 fs-3 border rounded-4 bg-white" href="null">Sklepik szkolny</a>
              <!-- <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button> -->
              <div>
                <div className="navbar-nav bg-light border rounded-3 ">
                  <a className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center" href="null">Logowanie</a>
                  <a className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center" href="null">Produkty</a>
                  <a className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center" href="null">Koszyk</a>
                  <a className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center" href="null">Informacje</a>
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
          <div className='col ps-3 pe-3 bg-dark-subtle d-flex align-items-center justify-content-left'>
              <p className="ms-2">Kontakt: xxxx</p>
          </div>
        </footer>
  );
}

function Login()
{
  return(
        <main className="temp row d-flex align-items-center justify-content-center">
          <div className="col-6 h-50 bg-dark-subtle border rounded-3 d-flex flex-column align-items-center justify-content-center">
            <form className="p-1 w-75">
              <div className="mb-3">
                <label for="mail" className="form-label">Email</label>
                <input type="email" className="form-control" id="mail" aria-describedby="emailHelp">
              </div>
              <div className="mb-3">
                <label for="pass" className="form-label">Hasło</label>
                <input type="password" className="form-control" id="pass">
              </div>
              <div className="mt-5 text-center">
                <button type="submit" className="btn bg-secondary text-light w-50">Zaloguj</button>
              </div>
            </form>
          </div>
        </main>
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
