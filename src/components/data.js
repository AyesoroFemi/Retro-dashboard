import { MdAutoGraph } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { TbBuildingCastle } from "react-icons/tb";
import { BsCart } from "react-icons/bs";
import { AiOutlineTranslation } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaRegFlag } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { CgChevronDown } from "react-icons/cg";

export const navContent = [
  {
    path: "/",
    icon: <MdAutoGraph size={24} />,
    text: "Dashboard",
  },
  {
    path: "/product",
    icon: <TbBuildingCastle size={24} />,
    text: "Products",
  },
  {
    path: "/blog",
    icon: <BsCart size={24} />,
    text: "Blog",
  },
  {
    path: "/transaction",
    icon: <AiOutlineTranslation size={24} />,
    text: "Transactions",
  },
  {
    path: "/users",
    icon: <FiUsers size={24} />,
    text: "Users",
  },
  {
    path: "/analysis",
    icon: <BiBarChartAlt2 size={24} />,
    text: "Analysis",
  },
  {
    path: "/reports",
    icon: <FaRegFlag size={24} />,
    text: "Reports",
    icon2: <CgChevronDown size={24} />,
  },
  {
    path: "/investment",
    icon: <BsBriefcase size={24} />,
    text: "Investment",
  },
  {
    path: "/settings",
    icon: <FiSettings size={24} />,
    text: "Settings",
  },
];
