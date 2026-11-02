import type { Page } from "../types/types";

type HeaderProps = {
    activePage: Page,
    onPageChange: (page: Page) => void
}

function Header({activePage, onPageChange}: HeaderProps) {
    const links: {key: Page, label: string}[] = [
        {key: 'Kezdőlap', label: "Kezdőlap"},
        {key: 'Admin', label: "Admin"},
        {key: 'Moderátor', label: "Moderátor"}
    ]
  
    return (
    <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    {links.map(page =>(
                            <li key={page.key} className="navbar-item">
                                <a type="button" className={`nav-link ${activePage == page.key? 'active': ''}`} onClick={() => onPageChange(page.key)}>
                                    {page.label}
                                </a>
                            </li>
                    ))}
                </ul>
                    <h4 className="navbar-text position-absolute start-50 translate-middle-x fw-bold">Könyvek</h4>
            </div>
        </nav>
    </>
  )  
}

export default Header;