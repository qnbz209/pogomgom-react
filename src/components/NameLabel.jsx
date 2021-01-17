function NameLabel(props) {
    function changeName(event) {
        props.setStateWithKey('name', event.target.value);
    }

    return (
        <div>
            <label>
                이름 <input value={props.name} onChange={changeName} />
            </label>
        </div>
    );
}

export default NameLabel;