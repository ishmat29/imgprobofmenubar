export default function Navbar() {
    return <nav className="nav">
        <div className = 'navbar'>
            <img scr= "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=366,fit=crop,q=95/AwvJLNyg3Li75PMo/qtm_logo_new-m6LD25DRWgS1z1Mx.png" alt = "QTIMinds" className="logo"/>
        </div>
        <ul>
            <li>
                <a href = "/home">Home</a>
            </li>
            <li>
                <a href = "https://www.qtiminds.com/about">About</a>
            </li>
            <li>
                <a href = "https://www.qtiminds.com/services">Services</a>
            </li>
            <li>
                <a href = "https://www.qtiminds.com/careers">Careers</a>
            </li>
            <li>
                <a href = "/courses">Courses</a>
            </li>
            <li>
                <a href = "https://www.qtiminds.com/contact">Contact</a>
            </li>
            <li>
                <a href = "/">Signup/Login</a>
            </li>
        </ul>
    </nav>
}