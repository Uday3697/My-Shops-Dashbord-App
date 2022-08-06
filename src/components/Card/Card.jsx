import React, { useState } from "react";
import {motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import "./Card.css";
import Chart from 'react-apexcharts';

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

//structure of compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 Hrs</span>
      </div>
    </motion.div>
  );
}
//Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data={
    options:{
      Chart:{
        type:"area",
        height:"auto",
      },
      
      dropShadow:{
          enabled:false,
          enabledOnSeries:undefined,
        },
        fill:{
           colors:["#fff"],
           type:"gradient",
        },
        datalabels:{
          enabled:false,
        },
        stroke:{
          curve:"smooth",
          color:["white"],
        },
        tooltip:{
          x:{
            format:"dd/mm/yy HH:mm",
          },
          grid:{
            SharedWorker:true,
          },
          aaxis:{
            type:"datetime",
            categories:[
              "2022-09-19T00:00:00.000Z",
              "2022-09-19T01:30:00.000Z",
              "2022-09-19T02:30:00.000Z",
              "2022-09-19T03:30:00.000Z",
              "2022-09-19T04:30:00.000Z",
              "2022-09-19T05:30:00.000Z",
              "2022-09-19T06:30:00.000Z",
            ],
          },

        }

      }
    
  }
  return (
    <motion.div 
    className="ExpandedCard"
      style=
      {{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      >
      <div style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type='area' options={data.options}/>
      
      </div>
      <span>Last 24 hrs</span>
    </motion.div>
  );
}

export default Card;
