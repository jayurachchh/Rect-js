import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function Acholder() {
  const [data, setData] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://6346651b745bd0dbd37c8fbb.mockapi.io/duFaculty/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

  return (
    <>
      <div class="alert alert-secondary" role="alert">
      <h1>Id:{data.id}</h1>
      <h1>FacultyName:{data.FacultyName}</h1>
      <h1>FacultyDesignation:{data.FacultyDesignation}</h1>
</div>

      <button type="button" class="btn btn-outline-primary"
        onClick={() => {
          navigate("/Acholder");
        }}
      >
        Back
      </button>
      <button type="button" class="btn btn-outline-danger"
        onClick={() => {
          fetch(
            "https://6346651b745bd0dbd37c8fbb.mockapi.io/duFaculty/" + params.id,
            {
              method: "DELETE"
            }
          )
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              navigate("/Acholder");
              console.log(res);
            });
        }}
      >
        Delete
      </button>
      <button type="button" class="btn btn-outline-success"
        onClick={() => {
          navigate("/AcEdit/" + params.id);
        }}
      >
        Edit
      </button>
    </>
  );
}
