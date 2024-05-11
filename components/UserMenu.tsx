import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          src="https://github.com/shadcn.png"
          alt="user avatar"
          width="30"
          height="30"
          className="rounded-full cursor-pointer select-none"
        />
      </DropdownMenuTrigger>
      {/* <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>johndoe@gmail.com</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent> */}
    </DropdownMenu>
  );
}
