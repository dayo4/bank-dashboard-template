import Icon from "@mdi/react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import {
  mdiAccountGroup,
  mdiArrowRight,
  mdiCallMade,
  mdiCallReceived,
  mdiCheckAll,
  mdiClockTimeNineOutline,
  mdiStore,
} from "@mdi/js";
import Charts from "./charts";

export default function Dashboard() {
  const dbSummary = [
    {
      fig: "1478 286",
      text: "Pending Requests",
      rate: "4.07%",
      icon: {
        icon: mdiClockTimeNineOutline,
        iconColor: "text-blue-600",
        iconBgColor: "bg-blue-50",
        rateColor: "text-light-green-700",
        rateIcon: mdiCallMade,
      },
    },
    {
      fig: "478 520",
      text: "Approved Requests",
      rate: "0.24%",
      icon: {
        icon: mdiCheckAll,
        iconColor: "text-orange-600",
        iconBgColor: "bg-orange-50",
        rateColor: "text-light-green-700",
        rateIcon: mdiCallMade,
      },
    },
    {
      fig: "154 872",
      text: "Total Agents",
      rate: "1.64%",
      icon: {
        icon: mdiStore,
        iconColor: "text-purple-600",
        iconBgColor: "bg-purple-50",
        rateColor: "text-red-700",
        rateIcon: mdiCallReceived,
      },
    },
    {
      fig: "167,067",
      text: "Total Users",
      rate: "0.64%",
      icon: {
        icon: mdiAccountGroup,
        iconColor: "text-light-green-600",
        iconBgColor: "bg-light-green-50",
        rateColor: "text-orange-700",
        rateIcon: mdiCallMade,
      },
    },
  ];

  const TABLE_HEAD = ["Name/Email", "Type", "Status", "Date", ""];

  const TABLE_ROWS = [
    {
      name: ["Micheal Olu", "micheal@mail.com"],
      type: "New Agent",
      status: "pending",
      date: "23/04/18",
      icon: <Icon size={0.9} path={mdiArrowRight}></Icon>,
    },
    {
      name: ["Chioma James", "alexa@mail.com"],
      type: "Account Deactivation",
      status: "pending",
      date: "23/04/18",
      icon: <Icon size={0.9} path={mdiArrowRight}></Icon>,
    },
    {
      name: ["Boluwatife Ade", "laure@mail.com"],
      type: "New User",
      status: "active",
      date: "23/04/18",
      icon: <Icon size={0.9} path={mdiArrowRight}></Icon>,
    },
    {
      name: ["Miriam Eric", "miriam@mail.com"],
      type: "Email Auth",
      status: "active",
      date: "23/04/18",
      icon: <Icon size={0.9} path={mdiArrowRight}></Icon>,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-stretch justify-center sm:justify-between gap-y-6 gap-x-3 mb-9 mt-9">
        {dbSummary.map(({ fig, icon, rate, text }, i) => {
          return (
            <section className="flex items-start basis-11/12 sm:basis-[calc(50%-12px)] md:basis-[calc(33.333333%-12px)] lg:basis-[calc(33.333333%-12px)] xl:basis-[calc(25%-12px)] bg-white shadow-lg p-4 rounded-xl">
              <div
                className={`${icon.iconBgColor} flex items-center justify-center rounded-full p-3`}
              >
                <Icon
                  size={1.2}
                  path={icon.icon}
                  className={`${icon.iconColor}`}
                ></Icon>
              </div>
              <div className="font-semibold pl-4">
                <h1 className="text-blue-gray-900 text-xl">{fig}</h1>
                <h3 className="text-gray-500 text-sm font-bold mb-4">{text}</h3>
                <p className="text-xs flex">
                  <Icon
                    size={0.7}
                    path={icon.rateIcon}
                    className={icon.rateColor}
                  ></Icon>
                  <span className={icon.rateColor + " ml-1 mr-2"}>{rate}</span>
                  <span className="text-gray-700">Last month</span>
                </p>
              </div>
            </section>
          );
        })}
      </div>

      <Charts></Charts>

      <div className="flex pb-8 overflow-auto shadow-lg rounded-xl">
        <Card className="basis-full xl:basis-[calc(75%-20px)]">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="text-xl font-bold">Recent Requests</div>
          </CardHeader>
          <CardBody className="overflow-auto px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold leading-none opacity-70"
                      >
                        <b>{head}</b>
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, type, status, date, icon }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name[0]}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl border bg-blue-gray-100 p-1"></div>
                          <div className="flex items-center flex-wrap max-w-[160px]">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold text-lg w-full"
                            >
                              {name[0]}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="text-gray-500 w-full"
                            >
                              {name[1]}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {type}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div
                          className={
                            (status === "pending"
                              ? " bg-orange-50 text-orange-500 "
                              : "bg-green-50 text-green-500 ") +
                            " rounded-3xl px-2 py-0 flex justify-center items-center"
                          }
                        >
                          {status}
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="deep-purple"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex justify-center items-center h-7 w-7  text-app-color bg-gray-100 rounded-full">
                          {icon}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
