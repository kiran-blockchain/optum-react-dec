import { useNavigate } from "react-router";

export const Navbar = ({ config }) => {
  //1. create a navigator
  //2. handle the click of button to navigate to a router
     const navigate = useNavigate();
    const buildNavItems = () => {
        let result = config.data.map((item, index) => {
            return (
                <li class="nav-item" key={item.name+index} onClick={e=>{
                    navigate(item.url)
                }}>
                    <a class="nav-link" href="#">{item.name}</a>
                </li>
            )
        });
        return result;
    }
    return (
        <ul class="navbar-nav me-auto">
            {buildNavItems()}
        </ul>
    )
}