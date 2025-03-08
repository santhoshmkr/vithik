import React, { useEffect, useState } from "react";
import axios from 'Axios';


function user() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/get-all`)
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .Delete(`http://localhost:8080/delete${id}`)
      .then((res) => {
        console.log(res);
        window.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <h1>users</h1>
      </div>
      <table>
        <thead>
          <th>Name:</th>
          <th>Email</th>
          <th>age:</th>
        </thead>

        {user.map((users) => (
          <tr key={users.id}>
            <td>{users.Name}</td>
            <td>{users.email}</td>
            <td>{users.age}</td>
          </tr>
        ))}

        <Link >edit</Link>
        <button onChange={()=>{handleDelete}}>Delete</button>
      </table>
    </div>
  );
}
