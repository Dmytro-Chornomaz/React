import './Main.css';
import materials from '../../data/materials.json';
import Articles from '../../components/Articles';

function Main() {
    return (
        <div className="Main">
            <Articles data={materials} />
        </div>
    );
}

export default Main;