import React,{useState,useEffect} from 'react'

const Form = (props) => {
    const [button,setButton]=useState(true)
 const [inp, setInp] = useState({
   location: "",
   latitude: "",
   longitude:""
 });
  const onChange = (val) => {
    setInp({ ...inp, [val.target.id]: val.target.value });
  };
  const onSubmit=(e)=>{
      e.preventDefault();
      props.add(inp)
  }
 useEffect(()=>{
     if(inp.location.length===0 && inp.latitude.length===0 && inp.longitude.length===0){
         setButton(true)
     }else{
         setButton(false)
     }
 },[inp]) 
    return (
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Location</label> <br />
            <input
              type="text"
              id="location"
              name="fname"
              placeholder="Location"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Enter Latitute</label> <br />
            <input
              type="text"
              id="latitude"
              name="lname"
              placeholder="Latitude"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Enter Longitude</label> <br />
            <input
              type="text"
              id="longitude"
              name="lname"
              placeholder="Longitude"
              onChange={onChange}
            />
          </div>
          {button ? (
            <button type="submit" className="submit">
              Submit
            </button>
          ) : (
            <button type="submit" className="add">
              Add+
            </button>
          )}
        </form>
      </div>
    );
}

export default Form
