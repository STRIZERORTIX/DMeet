import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <div className="header_logo">
               <h2>Destigma</h2>
            </div>
            <div className="header_nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">DMusic</a></li>
                    <li><a href="#">Analysis</a></li>
                </ul>
            </div>
        </header>
    )

}

export default Header;