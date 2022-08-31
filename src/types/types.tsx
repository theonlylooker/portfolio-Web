import { ReactNode } from "react";
// interface a {
//   users: userProps[];
// }

// interface userProps {
//   id: number;
//   name: string;
//   username: string;
// }

export interface work {
  name: string;
  link: string;
  demo: string;
  description: string;
  type: string;
  image: string;
}

export interface indexFetchWorks {
  works: work[];
}

export interface layoutProps {
  children?: ReactNode;
}

export interface navbarProps {
  items: string[];
}

export interface headerProps {
  items: string[];
}

export interface NavBarItemProps {
  name: string;
}

export interface SkillProps {
  skillElement: string;
}

export interface BlockProps {
  skills: string[];
  title: string;
}

export interface workBlockProps {
  work: work;
}

export interface ModalProps {
  modal: boolean;
  items: string[];
}
