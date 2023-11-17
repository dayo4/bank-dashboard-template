import Icon from "@mdi/react";
import { Button, Typography } from "@material-tailwind/react";
import { debounce } from "lodash";
import {
  mdiAccountGroup,
  mdiBriefcaseVariant,
  mdiChevronDown,
  mdiCloseOutline,
  mdiCog,
  mdiFileEdit,
  mdiFileTableBox,
  mdiHome,
  mdiMessageProcessing,
} from "@mdi/js";
import Logo from "../../assets/logo.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, NavSlice } from "../../redux";

export default function SideNav() {
  const [current, setCurrent] = useState(1);
  const { hideSideNAv, showSideNAv, setBigScreen, setSmallScreen } = NavSlice;
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav);

  useEffect(() => {
    // Debounce the resize event handler
    const handleResize = debounce(() => {
      if (window.innerWidth < 1024) {
        dispatch(setSmallScreen(true));
        dispatch(setBigScreen(false));
      } else {
        dispatch(setSmallScreen(false));
        dispatch(setBigScreen(true));
      }
    }, 100);
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const NavLinks = [
    { id: 1, title: "Dashboard", icon: mdiHome },
    { id: 2, title: "Requests", icon: mdiMessageProcessing },
    { id: 3, title: "KYCs", icon: mdiFileEdit },
    { id: 4, title: "Reports", icon: mdiFileTableBox },
    {
      id: 5,
      title: "Audit Trail",
      icon: mdiBriefcaseVariant,
      dropDown: mdiChevronDown,
    },
    { id: 6, title: "Users", icon: mdiAccountGroup },
    { id: 7, title: "Settings", icon: mdiCog },
  ];

  function handleSideNav() {
    if (nav.status && nav.isSmallScreen) {
      dispatch(hideSideNAv());
    } else {
      dispatch(showSideNAv());
    }
  }

  return (
    <aside
      className={
        (!nav.status ? " ShrinkOnSmallScreen " : " ExpandOnSmallScreen ") +
        " h-full lg:min-w-[210px] absolute top-0 left-0 bg-app-color z-[100] overflow-hidden transition-all shadow-lg lg:shadow-md overflow-x-hidden"
      }
    >
      <div className="flex justify-center ml-[-25px] mt-5 h-full overflow-y-scroll translate-x-[17px]">
        <section className="relative">
          <Icon
            onClick={() => handleSideNav()}
            path={mdiCloseOutline}
            size={1.1}
            className="absolute top-0 right-0 lg:hidden z-[200] text-white hover:opacity-50 active:bg-gray-400 transition-all rounded-md cursor-pointer"
          />

          <div
            href="#"
            className="flex justify-center mb-14  items-center w-full]"
          >
            <img src={Logo} alt="logo" width="90px" height="90px" />
          </div>

          <div className="pb-12">
            {NavLinks?.map((link, i) => {
              return (
                <Button
                  variant="text"
                  className={
                    (current === link.id
                      ? "text-white border-r-2 border-r-white bg-white bg-opacity-10 "
                      : " text-gray-400 ") +
                    " block w-full min-w-[170px] mb-4 py-2 pl-2 capitalize overflow-hidden relative"
                  }
                  key={i}
                  onClick={() => setCurrent(link.id)}
                >
                  <a href="#" className={"flex pr-4 font-[600] relative"}>
                    <Icon path={link.icon} className="mr-3" size={1}></Icon>
                    <span className="mt-[3px]">{link.title}</span>
                    {link.dropDown ? (
                      <Icon
                        path={link.dropDown}
                        className="mr-3 absolute -right-6 top-0"
                        size={1}
                      ></Icon>
                    ) : (
                      ""
                    )}
                  </a>
                </Button>
              );
            })}
          </div>

          <div className="flex flex-col justify-between items-center pb-12">
            <div>{""}</div>

            <div className="flex items-center gap-2 bg-white bg-opacity-10 px-1 py-3 rounded-md">
              <div className="h-10 w-10 rounded-full border bg-blue-gray-100 p-1"></div>
              <div className="flex items-center flex-wrap">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold text-sm text-white w-full"
                >
                  Nafisa Sh.
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-gray-400 text-xs w-full"
                >
                  Support Mgt
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}
