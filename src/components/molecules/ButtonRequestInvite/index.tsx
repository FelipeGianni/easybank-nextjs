import { Button } from "./styles";
import Link from "next/link";

const ButtonRequestInvite: React.FC = () => {
  return (
    <Link href="#" passHref>
      <Button>Request Invite</Button>
    </Link>
  );
};

export default ButtonRequestInvite;
