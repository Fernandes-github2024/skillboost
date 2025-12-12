import {
  RiHome5Line,
  RiUser3Line,
  RiBookMarkedLine,
  RiChatQuoteLine,
  RiPhoneLine
} from "react-icons/ri";

export const menuLinks = [
  {
    id: 1,
    label: "Início",
    href: "/",
    icon: RiHome5Line,
  },
  {
    id: 2,
    label: "Sobre",
    href: "/sobre",
    icon: RiUser3Line,
  },
  {
    id: 3,
    label: "Cursos",
    href: "/cursos",
    icon: RiBookMarkedLine,
  },
  {
    id: 4,
    label: "Depoimentos",
    href: "/depoimentos",
    icon: RiChatQuoteLine,
  },
  {
    id: 5,
    label: "Contacto",
    href: "/contacto",
    icon: RiPhoneLine,
  },
];