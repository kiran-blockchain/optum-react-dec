export const Navbar = ({ config }) => {
  
    const buildNavItems = () => {
        let result = config.data.map((item, index) => {
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