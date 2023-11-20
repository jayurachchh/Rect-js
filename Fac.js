import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Fac() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/faculty/")
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
        <h1
        //   onClick={() => {
        //     navigate("/Acdetail/" + d.id);
        //   }}
        >
          {d.id}
          {d.FacultyName}<br/>
          {d.FacultyDesignation}
        </h1>
      </>
    );
  });
  return formetedData;
}
