import { IoIosHome } from "react-icons/io";
import { GiTrophyCup } from "react-icons/gi";
import { AiFillContacts } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
const leftItems = [
  { content: "Home", to: "", id: 1, icon: IoIosHome },
  { content: "Achievements", to: "cart", id: 2, icon: GiTrophyCup },
  { content: "Contact", to: "error", id: 3, icon: AiFillContacts },
];
const rightItems = [
  { content: "Teams", to: "teams", id: 4, icon: AiOutlineTeam },
  { content: "About", to: "signup", id: 5, icon: AiOutlineTeam },
  { content: "Sponsor", to: "signup", id: 6, icon: GrMoney },
];

export { leftItems, rightItems };
