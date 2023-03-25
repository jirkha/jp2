import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Area,
  AreaChart,
    CartesianGrid,
    Label,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { Box, Typography } from "@mui/material";

function DayStatistic({data}) {
    const [dayData, setDayData] = useState([]);

    useEffect(() => {
      console.log("data", data);
      setDayData(data.reverse());
    }, [data, dayData]);

    // let getData = async () => {
    // Axios.get('/api/daily_sales/')
    //    .then((res) => {
    //     setData(res.data)
    //     //console.log("data: ", res.data);
    // })};

    const dateFormater = (date) => {
      //console.log("date", date);
      let objectDate = new Date(date);
      let day = objectDate.getDate();
      let month = objectDate.getMonth()+1;
      let year = objectDate.getFullYear();
      return `${day}.${month}.${year}`
    }

    if (data.length === 0) return <Typography>Žádná data ke grafickému zobrazení</Typography>

 
return (
  <Box>
    <AreaChart width={700} height={500} data={dayData}>
      <Area
        name="Tržby [Kč]"
        type="monotone"
        dataKey="tržby"
        stroke="#2196F3"
        fill="#2196F3"
        strokeWidth={3}
      />
      {/* <CartesianGrid stroke="#ccc" /> */}
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" tickFormatter={(t) => dateFormater(t)}></XAxis>
      <YAxis tickFormatter={(t) => `${t} Kč`} />
      <Tooltip />
      <Legend />
    </AreaChart>
  </Box>
);
}

export default DayStatistic