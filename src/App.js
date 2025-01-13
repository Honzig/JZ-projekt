import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function hashCode(str) {
  return str.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
}

var Accounts=[
  {
  "email":"admin@admin.admin",
  "password":hashCode('admin')
}]

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
                <div class="navbar-nav bg-light border rounded-3 ">
                  <button class="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center">Logowanie</button>
                  <button class="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center">Produkty</button>
                  <button class="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center">Koszyk</button>
                  <button class="nav-item nav-link m-1 bg-dark-subtle border rounded-4 text-center">Informacje</button>
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

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    for(let i=0; i<Accounts.length; i++)
    {
      console.log(hashCode(formJson.password), Accounts[i].password);
      if(Accounts[i].email==formJson.email && Accounts[i].password===hashCode(formJson.password))
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
                <label for="mail" className="form-label">Email</label>
                <input name="email" type="email" className="email form-control" defaultValue="Email@a.a"></input>
              </div>
              <div className="mb-3">
                <label for="pass" className="form-label">Hasło</label>
                <input name="password" type="password" className="password form-control" defaultValue="Hasło"></input>
              </div>
              <div className="mt-5 text-center">
                <button type="submit" className="btn bg-secondary text-light w-50">Zaloguj</button>
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

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    if(formJson.email!=null && formJson.password!=null)
    {
      Accounts.push(
        {"email":formJson.email,
        "password":hashCode(formJson.password)}
      );
    }
  }

  return(
        <main className="main row d-flex align-items-center justify-content-center">
          <div className="col-5 h-50 bg-dark-subtle border rounded-3 d-flex flex-column align-items-center justify-content-center">
            <form className="p-1 w-75" onSubmit={Submit}>
              <div className="mb-3">
                <label for="mail" className="form-label">Email</label>
                <input name="email" type="email" className="email form-control" defaultValue="Email@a.a"></input>
              </div>
              <div className="mb-3">
                <label for="pass" className="form-label">Hasło</label>
                <input name="password" type="password" className="password form-control" defaultValue="Hasło"></input>
              </div>
              <div className="mt-3 form-check">
               <input class="form-check-input" type="checkbox" value=""></input>
               <label class="form-check-label" for="flexCheckDefault">
                 Zapoznałem/am się z <a href="#">regulaminem</a>
               </label>
              </div>
              <div className="mt-3 text-center">
                <button type="submit" className="btn bg-secondary text-light w-50">Stwórz konto</button>
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
      <Login></Login>
      {/* <Register></Register> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
