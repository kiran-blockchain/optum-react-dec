export const Navbar = ({ }) => {
    const data = [{
        id: 1,
        name: "Products",
        url: "/products"

    },
    {
        id: 2,
        name: "Cart",
        url: "/cart"

    },
    {
        id: 3,
        name: "Profile",
        url: "/profile"

    },
    {
        id: 4,
        name: "Logout",
        url: "/"

    },
    {
        id: 5,
        name: "Register",
        url: "/register"

    }, {
        id: 6,
        name: "Login",
        url: "/login"

    }];
    const buildNavItems = () => {
        let result = data.map((item, index) => {
            return (
                <li class="nav-item" key={item.name+index}>
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