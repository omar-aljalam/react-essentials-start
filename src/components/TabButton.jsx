export default function TabButton(props) {
    function handleClick() {
        console.log("HI");
        
    }

    return (
        <li>
            <button onClick={handleClick} >{props.children}</button>
        </li>
    );
}