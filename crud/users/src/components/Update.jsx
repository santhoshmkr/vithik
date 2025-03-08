import React from "react";
import {useParam} from 'react-router-dom'

function Update(){
    const [formdata , setformdata]=({
        Name:'',
        email:'',
        age:''
    })

    const id = useParam(id);

    useEffect(() => {
        axios
          .put(`http://localhost:8080/update ${id}`)
          .then((res) => {
            console.log(res.data);
            setformdata(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id]);

      const handleChange =(e)=>{
        setformdata([...formdata,
            [e.target.Name]=[e.target.value]])
      }
      
      const handleUpdate =(id)=>{
        e.preventDefault();
        console.log(formdata);
         axios.put("http://localhost:8080/Update${id}")
            .then((res) => {
            console.log(res.data);  
            setformdata(res.data);
          
          })
          .catch((err) => {
            console.log(err);
          });

      }


      return(
        <div>
            <div>
            <form action=""  onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="" onChange={handleChange}>Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="" onChange={handleChange}>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="" onChange={handleChange}>age</label>
                    <input type="number" />

                    <button>submit</button>
                </div>
            </form>
            </div>
        </div>
      )
}