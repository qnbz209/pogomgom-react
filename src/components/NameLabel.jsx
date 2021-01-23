import { useCallback } from "react";

function NameLabel(props) {
    const { name, setStateWithKey } = props;
    
    const changeName = useCallback((event) => {
        setStateWithKey('name', event.target.value);
    }, [setStateWithKey]);

    return (
        <div>
            <label>
                이름 <input value={name} onChange={changeName} />
            </label>
        </div>
    );
}

export default NameLabel;