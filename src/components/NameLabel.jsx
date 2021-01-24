import { useCallback } from "react";

function NameLabel({ name, setStateWithKey }) {
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