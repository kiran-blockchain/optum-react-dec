import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../store/AuthReducer";

export const Navbar = ({ config }) => {
    //1. create a navigator
    //2. handle the click of button to navigate to a router
    const navigate = useNavigate();
    const auth = useSelector(x => x.auth);
    const dispatch = useDispatch();
    const buildNavItems = () => {
        let result;
        if (auth.token == '') {
            result = config.data.filter(x => x.id > 4).map((item, index) => {
                return (
                    <li class="nav-item" key={item.name + index} onClick={e => {
                        navigate(item.url)
                    }}>
                        <a class="nav-link" href="#">{item.name}</a>
                    </li>
                )
            });
        } else {
            result = config.data.filter(x => x.id <= 4).map((item, index) => {
                return (
                    <li class="nav-item" key={item.name + index} onClick={e => {
                        if (item.url == "/logout") {
                            dispatch(logout())
                            navigate("/login")
                        } else {
                            navigate(item.url)

                        }
                    }
                    }>
                        <a class="nav-link" href="#">{item.name}</a>
                    </li>
                )
            });
        }

        return result;
    }
    return (
        <ul class="navbar-nav me-auto">
            {buildNavItems()}
        </ul>
    )
}