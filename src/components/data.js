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
    id: 1,
    path: "/",
    icon: <MdAutoGraph size={24} />,
    text: "Dashboard",
  },
  {
    id: 2,
    path: "/product",
    icon: <TbBuildingCastle size={24} />,
    text: "Products",
  },
  {
    id: 3,
    path: "/blog",
    icon: <BsCart size={24} />,
    text: "Blog",
  },
  {
    id: 4,
    path: "/transaction",
    icon: <AiOutlineTranslation size={24} />,
    text: "Transactions",
  },
  {
    id: 5,
    path: "/users",
    icon: <FiUsers size={24} />,
    text: "Users",
  },
  {
    id: 6,
    path: "/analysis",
    icon: <BiBarChartAlt2 size={24} />,
    text: "Analysis",
  },
  {
    id: 7,
    path: "/reports",
    icon: <FaRegFlag size={24} />,
    text: "Reports",
    icon2: <CgChevronDown size={24} />,
  },
  {
    id: 8,
    path: "/investment",
    icon: <BsBriefcase size={24} />,
    text: "Investment",
  },
  {
    id: 9,
    path: "/settings",
    icon: <FiSettings size={24} />,
    text: "Settings",
  },
];
