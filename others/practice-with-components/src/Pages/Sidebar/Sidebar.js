import './Sidebar.css';
import materials from '../../data/materials.json';

function Sidebar() {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    {materials.map((item, index) =>
                        <li key={index}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;