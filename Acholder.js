import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Acholder() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://6346651b745bd0dbd37c8fbb.mockapi.io/duFaculty")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  const formetedData = data.map((d) => {
    return (
      <>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <div class="alert alert-secondary" role="alert">
  
    <h1
        >
          {d.FacultyName}
        </h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-outline-info"   
       onClick={() => {
        navigate("/Acdetail/" + d.id);
      }}
      >
        Details
      </button>
        </div>
</div>
        
      
      </>
    );
  });
  return formetedData;
}
