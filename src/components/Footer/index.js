import { NavLink } from "react-router-dom";
import { FooterComponents } from "./styles";

export function Footer() {
    return (
        <FooterComponents>
            <NavLink to="/" title="Menu">
                <button>Menu</button>
            </NavLink>
        </FooterComponents>
    )
}