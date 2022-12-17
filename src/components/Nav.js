import { Link } from "react-router-dom"

export default function Nav() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to={'/stocks'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                </li>
            </ul>
        </nav>
    )
}