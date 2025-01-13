import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function hashCode(str) {
  return str.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
}



if(!localStorage.getItem('accounts'))
{var Accounts=
  [
    {
    "email":"admin@admin.admin",
    "password":hashCode('admin')
  }]
  localStorage.setItem('accounts',JSON.stringify(Accounts));
}
else
{
  Accounts=JSON.parse(localStorage.getItem('accounts'));
}

function Navbar()
{
  return(
        <header className="header row">
            <nav className="navbar col navbar-expand-lg ps-3 pe-3 bg-dark-subtle">
              <a className="navbar-brand ms-2 p-2 fs-3 border rounded-4 bg-white" href="null">Sklepik szkolny</a>
              {/* <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <div>
                <div className="navbar-nav bg-light border rounded-3 ">
                  <button className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center">Logowanie</button>
                  <button className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center">Produkty</button>
                  <button className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center">Koszyk</button>
                  <button className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center">Informacje</button>
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
          <div className='col bg-dark-subtle d-flex align-items-center justify-content-left'>
              <p className="ms-2">Kontakt: xxxx</p>
          </div>
        </footer>
  );
}

function Login(status)
{
  
  function Submit(e) {
    e.preventDefault();

    Accounts=localStorage.getItem('accounts');
    console.log(Accounts);

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    console.log(Accounts);
    for(let i=0; i<Accounts.length; i++)
    {
      if(Accounts[i].email===formJson.email && Accounts[i].password===hashCode(formJson.password))
      {
        console.log('Logged in!');
      }
      else
      {
        console.log('Failed to log in.');
      }
    }
  }

  return(
        <main className="main row d-flex align-items-center justify-content-center">
          <div className="col-5 h-50 bg-dark-subtle border rounded-3 d-flex flex-column align-items-center justify-content-center">
            <form className="p-1 w-75" onSubmit={Submit}>
              <div className="mb-3">
                <label htmlFor="mail" className="form-label">Email</label>
                <input name="email" type="email" className="email form-control" defaultValue="Email"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="pass" className="form-label">Hasło</label>
                <input name="password" type="password" className="password form-control" defaultValue="Hasło"></input>
              </div>
              <div className="mb-3 text-center">
                <button type="submit" className="btn bg-secondary text-light w-50">Zaloguj</button>
              </div>
              <div className="mt-4 text-center">
                <a className="btn bg-secondary text-light w-50" href="/register">Rejestracja</a>
              </div>
            </form>
          </div>
        </main>
    );
}

function Register()
{
  function Submit(e) {
    e.preventDefault();

    console.log(Accounts);

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    if(formJson.email!=null && formJson.password!=null)
    {
      Accounts.push(
        {"email":formJson.email,
        "password":hashCode(formJson.password)}
      );
      localStorage.setItem('accounts',JSON.stringify(Accounts));

      document.getElementById('reg').innerText="Konto stworzone!";
    }
    else
    {
      document.getElementById('reg').innerText="Wypełnij oba pola.";
    }
  }

  return(
        <main className="main row d-flex align-items-center justify-content-center">
          <div className="col-5 h-50 bg-dark-subtle border rounded-3 d-flex flex-column align-items-center justify-content-center">
            <form className="p-1 w-75" onSubmit={Submit}>
              <div className="mb-3">
                <label htmlFor="mail" className="form-label">Email</label>
                <input name="email" type="email" className="email form-control" defaultValue="Email"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="pass" className="form-label">Hasło</label>
                <input name="password" type="password" className="password form-control" defaultValue="Hasło"></input>
              </div>
              <div className="mt-3 form-check">
               <input className="form-check-input" type="checkbox" required="required" value=""></input>
               <label className="form-check-label" htmlFor="flexCheckDefault">
                 Zapoznałem/am się z <a href="regulamin">regulaminem</a>
               </label>
              </div>
              <div className="mt-2 text-center">
                <button type="submit" id="reg" className="btn bg-secondary text-light w-50">Stwórz konto</button>
              <div className="mt-3 text-center">
                <a className="btn bg-secondary text-light w-50" href="/login">Logowanie</a>
              </div>
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
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login></Login>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
