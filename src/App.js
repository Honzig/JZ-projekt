import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function hashCode(str) {
  return str.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
}

if(!localStorage.getItem('loggedin'))
  {var loggedin=false;
    localStorage.setItem('loggedin',loggedin);
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
                  <a className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center" href="login">Logowanie</a>
                  <a className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center" href="/products">Produkty</a>
                  <a className="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center" href="info">Informacje</a>
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

function Login()
{
  
  function Submit(e) {
    e.preventDefault();

    Accounts=JSON.parse(localStorage.getItem('accounts'));

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    for(let i=0; i<Accounts.length; i++)
    {
        if(Accounts[i].email===formJson.email && Accounts[i].password===hashCode(formJson.password))
        {
          console.log('Logged in!');
          if(Accounts[i].email==="admin@admin.admin")
          {
            var admin=true;
          }
          loggedin=true;

          localStorage.setItem('loggedin',true);

          window.location.href = 'products'; //one level up
        }
    }
    if(!loggedin)
      {
        console.log('Login failed.');
      }
    loggedin=false;
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
    
    Accounts=JSON.parse(localStorage.getItem('accounts'));

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

function ProductList()
{
  var Products=[
    {
      "id":0,
      "name":"example",
      "price":5.0,
      "description":"desc",
      "remaining":1,
      "selected":false
    }
  ];

  if(localStorage.getItem('loggedin')=='true')
  {
    return(
      <section className="main row d-flex align-items-center justify-content-center">
        <div className="col-8 h-75 bg-dark-subtle border rounded-3 d-flex flex-column align-items-center">
          <h1 className='mt-5 mb-3'>Produkty</h1>
          <table className="table w-75">
            <thead>
              <tr>
                <th scope='col' className='text-center'>Produkt</th>
                <th scope='col' className='text-center'>Cena</th>
              </tr>
            </thead>
            <tbody>
              {Products.map(el=>(
                <tr key={el.id}>
                  <td className='text-center'>{el.name}</td>
                  <td className='text-center'>{el.price}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}
function ProductCard()
{
  var Products=[
    {
      "id":0,
      "name":"examplename",
      "price":5.0,
      "description":"exampledesc",
      "remaining":1,
      "selected":false
    }
  ];

  if(localStorage.getItem('loggedin')=='true')
  {
    return(
      <section className="main row d-flex align-items-center justify-content-center">
        <div className="col-8 h-75 bg-dark-subtle border rounded-3 d-flex flex-column align-items-center justify-content-center">
        {Products.map(el=>(
        <ul class="list-group w-75">
          <li class="list-group-item text-center p-4"><p><b>Nazwa produktu:</b></p> {el.name}</li>
          <li class="list-group-item text-center p-5"><p><b>Opis: </b></p>{el.description}</li>
          <li class="list-group-item text-center p-3"><p><b>Cena: </b></p>{el.price}</li>
          <li class="list-group-item text-center p-3"><p><b>Dostępna ilość: </b></p>{el.remaining}</li>
        </ul>
        ))}
        </div>
      </section>
    )
  }
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
          <Route path="/products" element={<ProductList></ProductList>}></Route>
          <Route path="/cards" element={<ProductCard></ProductCard>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
