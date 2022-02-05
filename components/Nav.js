import NavItem from "./NavItem";
import classnames from "classnames";

export default function Nav({ scheme, dir }) {
    const dirs = {
        horizontal: "justify-center space-x-10",
        vertical: "flex-col space-y-6"
    }
    const pickedDir = dirs[dir];

    return (
        <ul className={classnames("flex", pickedDir)}>
            <NavItem scheme={scheme} href="#profile">Profile</NavItem>
            <NavItem scheme={scheme} href="#skills">Skill</NavItem>
            <NavItem scheme={scheme} href="#project">Project</NavItem>
            <NavItem scheme={scheme} href="#contact">Contact</NavItem>
        </ul>
    );
}
