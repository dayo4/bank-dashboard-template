import Icon from "@mdi/react";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  mdiAccount,
  mdiAccountPlusOutline,
  mdiBell,
  mdiBrightness7,
  mdiChevronDown,
  mdiLoginVariant,
  mdiMagnify,
  mdiMenu,
} from "@mdi/js";

import { useDispatch, useSelector, NavSlice } from "../../redux";

export default function TopNav() {
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav);
  const { hideSideNAv, showSideNAv } = NavSlice;

  function handleSideNav() {
    if (nav.status && nav.isSmallScreen) {
      dispatch(hideSideNAv());
    } else {
      dispatch(showSideNAv());
    }
  }

  const UserMenu = () => {
    return (
      <Menu>
        <MenuHandler>
          <div className="cursor-pointer mr-4  bg-gray-200 p-1 rounded-full overflow-hidden outline-none">
            <Icon path={mdiAccount} size={1.2} className="text-gray-500"></Icon>
          </div>
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <a href="#">
              <Typography variant="small" className="font-normal">
                My Profile
              </Typography>
            </a>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <Typography variant="small" className="font-normal">
              Settings
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
              />
            </svg>
            <Typography variant="small" className="font-normal">
              Help
            </Typography>
          </MenuItem>
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem className="flex items-center gap-2 ">
            <Icon path={mdiLoginVariant} size={0.7} />
            <div>
              <Typography variant="small" className="font-normal">
                Sign In
              </Typography>
            </div>
          </MenuItem>
          <MenuItem className="flex items-center gap-2 ">
            <Icon path={mdiAccountPlusOutline} size={0.7} />
            <div>
              <Typography variant="small" className="font-normal">
                Create Account
              </Typography>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  };

  return (
    <div className="flex justify-between items-center h-[65px] absolute top-0 left-0 z-[99] bg-white w-full shadow-lg">
      <div className="ml-5 lg:ml-[240px] font-bold text-blue-gray-700 text-lg md:text-xl xl:text-2xl">
        Dashboard
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center justify-center">
        <div className="flex border border-gray-100 rounded-md py-1 px-3">
          <Icon
            path={mdiMagnify}
            size={1.1}
            className="text-gray-500 mr-2"
          ></Icon>
          <input
            type="search"
            placeholder="Enter Keyword"
            className="border-none outline-none "
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center mx-4">
        <div className="hidden sm:block relative cursor-pointer mr-2 px-2 rounded-xl">
          <span className="text-gray-500 text-xl mr-5">EN</span>
          <Icon
            path={mdiChevronDown}
            size={0.9}
            className="absolute right-0 top-1 text-gray-500"
          ></Icon>
        </div>
        <div className="cursor-pointer mr-2 p-1.5  bg-gray-200 rounded-full">
          <Icon
            path={mdiBrightness7}
            size={0.9}
            className="bg-gray-200 text-gray-400"
          ></Icon>
        </div>
        <div className="cursor-pointer mr-2 p-1.5  bg-gray-200 rounded-full">
          <Icon
            path={mdiBell}
            size={0.9}
            className="bg-gray-200 text-gray-400"
          ></Icon>
        </div>
        <UserMenu></UserMenu>
        <IconButton
          onClick={() => handleSideNav()}
          variant="text"
          className="mr-0 md:mr-6 lg:hidden"
        >
          <Icon path={mdiMenu} size={1.2} className="text-gray-600"></Icon>
        </IconButton>
      </div>
    </div>
  );
}
