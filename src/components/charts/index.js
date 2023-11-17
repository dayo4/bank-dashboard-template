import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function Charts() {
  const [lineChartWidth, setLineChartWidth] = useState(250);

  useEffect(() => {
    // Debounce the resize event handler
    const handleLineChart = debounce(() => {
      const LineChartCont =
        document.getElementById("LineChartCont").offsetWidth;
      console.log(LineChartCont);
      setLineChartWidth(LineChartCont - 20);
    }, 200);
    handleLineChart();

    window.addEventListener("resize", handleLineChart);

    return () => {
      window.removeEventListener("resize", handleLineChart);
    };
  });

  const LineChartData = [
    {
      name: "Dec",
      uv: 26,
      pv: 10,
      amt: 2400,
    },
    {
      name: "Jan",
      uv: 25,
      pv: 24,
      amt: 2210,
    },
    {
      name: "Feb",
      uv: 47,
      pv: 23,
      amt: 2290,
    },
    {
      name: "Mar",
      uv: 20,
      pv: 28,
      amt: 2000,
    },
    {
      name: "Apr",
      uv: 16,
      pv: 10,
      amt: 2181,
    },
    {
      name: "May",
      uv: 90,
      pv: 38,
      amt: 2500,
    },
    {
      name: "Jun",
      uv: 34,
      pv: 80,
      amt: 2100,
    },
  ];

  const BarChartData = [
    {
      name: "Jan",
      uv: 25,
      pv: 24,
      amt: 2210,
    },
    {
      name: "Feb",
      uv: 47,
      pv: 23,
      amt: 2290,
    },
    {
      name: "Mar",
      uv: 20,
      pv: 28,
      amt: 2000,
    },
    {
      name: "Apr",
      uv: 16,
      pv: 10,
      amt: 2181,
    },
    {
      name: "May",
      uv: 90,
      pv: 38,
      amt: 2500,
    },
    // {
    //   name: "Jun",
    //   uv: 34,
    //   pv: 80,
    //   amt: 2100,
    // },
  ];

  return (
    <div className="flex justify-between gap-5 flex-wrap mb-12 w-full ">
      <Card className="basis-full xl:basis-[calc(75%-20px)] shadow-lg rounded-xl">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none flex items-center justify-between"
        >
          <div>
            <div className="text-xl font-bold">User Inflow Statistics</div>
            <p className="text-base text-gray-500">Nov - July</p>
          </div>
          <div className="flex">
            <div className="mr-3">
              <div className="flex items-center text-xl font-bold text-gray-700 ">
                <span className="p-1 h-1 w-1 rounded-full bg-blue-800 mr-2"></span>
                <span>AGENTS</span>
              </div>
              <div className="text-base ml-5">674 287</div>
            </div>
            <div>
              <div className="flex items-center text-xl font-bold text-gray-700 ">
                <span className="p-1 h-1 w-1 rounded-full bg-green-700 mr-2"></span>
                <span>USERS</span>
              </div>
              <div className="text-base ml-5">456 287</div>
            </div>
          </div>
        </CardHeader>
        <CardBody
          id="LineChartCont"
          className="overflow-hidden px-0 w-[calc(100%-1px)] min-h-[300px]"
        >
          <ResponsiveContainer
            width={lineChartWidth}
            height={300}
            className="w-full h-full"
          >
            <LineChart
              width={800}
              height={300}
              data={LineChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="1 3" />
              <XAxis dataKey="name" tick={{ fontSize: "12px" }} />
              <YAxis tick={{ fontSize: "12px" }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      <Card className="basis-full sm:basis-[60%] md:basis-[40%] xl:basis-[calc(25%)] shadow-lg rounded-xl bg-app-color pt-5">
        <CardBody className="overflow-hidden -ml-10  pr-0 w-[calc(100%-1px)] min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={BarChartData}
              margin={{
                top: 5,
                right: 1,
                left: 1,
                bottom: 5,
              }}
              barSize={5}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 2, right: 2 }}
                tick={{ fill: "white", fontSize: "10px" }}
                tickLine={{ stroke: "white" }}
              />
              <YAxis
                tick={{ fill: "white", fontSize: "10px" }}
                tickLine={{ stroke: "white" }}
              />
              <CartesianGrid strokeDasharray="1 3" />
              <Bar dataKey="pv" fill="white" stroke="white" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
        <CardFooter
          floated={false}
          shadow={false}
          className="bg-transparent text-white"
        >
          <div className="text-xl font-bold">New Users</div>
          <p className="text-base">
            <b>{"(+23% )"}</b> Than last week
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
