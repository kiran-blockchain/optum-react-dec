import { Navbar } from "./Navbar";

export const Header = ({config,cartItems}) => {
    // const title = "Flipzon";
    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{config.title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    {/* Nav bar is acting as a child component*/}
                    <Navbar config={config}/>
                    <li className="nav-item">
                        <a className="nav-link">{cartItems.length}</a>
                    </li>
                </div>
            </div>
        </nav>
    )
}