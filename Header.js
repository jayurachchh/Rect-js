import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    {/* <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
</nav> */}
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent ">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link" aria-current="page"><Link to="/">Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to="/About">About</Link>{" "}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to="/Acholder">Acholder</Link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to="/Addnew">Addnew</Link>{" "}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to="/fac">faculty </Link></a>
        </li>
      </ul>

    </div>
  </div>
</nav>
{/* 
      <Link to="/">Home</Link>
       <Link to="/About">About</Link>{" "}
      <Link to="/Acholder">Acholder</Link> 
      <Link to="/Addnew">Addnew</Link>{" "}
      <Link to="/fac">faculty </Link>  */}
    </>
  );
}
