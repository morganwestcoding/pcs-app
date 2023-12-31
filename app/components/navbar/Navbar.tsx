import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Chat from "./Chat";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <div className="fixed w-full bg-white z-50">
      <div
        className="
         
        py-2 
        "
      >
      <Container>
        <div 
          className="
            flex items-center gap-3
          "
        >
          <Logo />
          <div className="flex-grow"></div>
          <Chat/>
          <Search />
          
          <UserMenu currentUser={currentUser} />
          
        </div>
      </Container>
    </div>
    <Categories />
  </div>
  );
}


export default Navbar;
