import React, {useEffect,useState} from 'react'
import Axios from "axios";

function TestApi() {
//     const [connection, setConnection] = useState([])
//   useEffect(() => {
//     Axios.get(
//       //"http://bulgur.herokuapp.com/api/v1/searchConnection?fromId=101&toId=121&combinationId=100/"
//       "http://private-anon-ac1aac3404-bulgur.apiary-mock.com/api/v1/searchConnection?fromId=101&toId=121&combinationId=100"
//     )
//       .then((res) => {
//         console.log("Bulgur", res.data);
//         setConnection(res.data);
//         //console.log("response", res);
//       })
//       .catch((err) => console.log(err));
//   }, []);
  
  const golemio_klic =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZlY2tvakBzZXpuYW0uY3oiLCJpZCI6MTg2NCwibmFtZSI6bnVsbCwic3VybmFtZSI6bnVsbCwiaWF0IjoxNjgwMzcwNTE0LCJleHAiOjExNjgwMzcwNTE0LCJpc3MiOiJnb2xlbWlvIiwianRpIjoiNzdiYzNlOWUtMDY4OS00NzRhLWJkY2UtYjk1MDg2NzZmZDVkIn0.X80Pa6H4gItcM1hoHvkr9Yxk-HRwuK6zlZvImD8FFXc";

  fetch("https://api.golemio.cz/v2/gtfs/stops?names=Amforova&", {
    method: "GET",
    headers: { "x-access-token": golemio_klic },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Golemio", data);
    });
  return (
    <div>
        <p></p>
    </div>
  )
}

export default TestApi