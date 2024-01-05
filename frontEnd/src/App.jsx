import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <table style={{borderCollapse: "collapse", width: "100%", color: "#588c7e", fontFamily: "monospace", fontSize: "25px", textAlign: "left"}}>
        <thead>
          <tr style={{backgroundColor: "#f2f2f2", color: "#588c7e"}}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i.ID} style={i % 2 ? {backgroundColor: "#f2f2f2"} : {backgroundColor: "#ffffff"}}>
              <td>{d.ID}</td>
              <td>{d.Name}</td>
              <td>{d.Email}</td>
              <td>{d.Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App