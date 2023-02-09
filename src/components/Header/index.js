import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <div>
                <img src="https://i.pinimg.com/564x/fb/3e/84/fb3e84ea9074556c3f576e1193f2c3cc.jpg" alt=""/>
            </div>
        </HeaderContainer>
    )
}