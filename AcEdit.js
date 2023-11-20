import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function AcEdit() {
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
       FacultyName::
      <input
        type="text"
        value={data.FacultyName}
        onChange={(e) => {
          setData({ ...data,  FacultyName: e.target.value });
        }}
      />
      <br></br>
      <br></br>
      Faculty Designation:
      <input
        type="text"
        value={data.FacultyDesignation}
        onChange={(e) => {
          setData({ ...data, FacultyDesignation: e.target.value });
        }}
      />
      <br></br>
      <br></br>
      <button type="button" class="btn btn-outline-primary" 
        onClick={() => {
          fetch(
            "https://6346651b745bd0dbd37c8fbb.mockapi.io/duFaculty/" + params.id,
            {
              method: "PUT",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            }
          ).then((res) => {
            navigate("/Acholder");
          });
        }}
      >
        Edit
      </button>
    </>
  );
}
// export default function AcEdit() {
//   return (
//     <>
//       <br />
//       Jayu rachchh
//     </>
//   );
// }
