import './TabButton.css';


function TabButton({children, onClick, isActive}) {


    return (
        <li>
            <button className={isActive ? 'active' : undefined} onClick={onClick}>{children}</button>
        </li>
    );
}

export default TabButton;