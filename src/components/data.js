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
    icon: <MdAutoGraph />,
    text: "Dashboard",
  },
  {
    path: "/product",
    icon: <TbBuildingCastle />,
    text: "Products",
  },
  {
    path: "/product",
    icon: <BsCart />,
    text: "Blog",
  },
  {
    path: "/product",
    icon: <AiOutlineTranslation />,
    text: "Transactions",
  },
  {
    path: "/product",
    icon: <FiUsers />,
    text: "Users",
  },
  {
    path: "/product",
    icon: <BiBarChartAlt2 />,
    text: "Analysis",
  },
  {
    path: "/product",
    icon: <FaRegFlag />,
    text: "Reports",
    icon2: <CgChevronDown />,
  },
  {
    path: "/product",
    icon: <BsBriefcase />,
    text: "Investment",
  },
  {
    path: "/product",
    icon: <FiSettings />,
    text: "Settings",
  },
];
