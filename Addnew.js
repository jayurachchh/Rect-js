import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Addnew() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  return (
    <>
      FacultyName:
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, FacultyName: e.target.value });
        }}
      />
      <br></br>
      <br></br>
      Faculty Designation:
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, FacultyDesignation: e.target.value });
        }}
      />
      <br></br>
      <br></br>
      <button  type="button" class="btn btn-outline-primary" 
        onClick={() => {
          fetch("https://6346651b745bd0dbd37c8fbb.mockapi.io/duFaculty", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              navigate("/Acholder");
            });
        }}
      >
        Insert
      </button>
    </>
  );
}
