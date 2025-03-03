import { ImAngry } from "react-icons/im";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <ImAngry className="w-6 h-6" />
      </Link>
    </Button>
  );
};

export default Logo;
