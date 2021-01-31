import { useCallback } from "react";
import { NameInformation } from './Interfaces';

function NameLabel({ name, setStateWithKey } : NameInformation) {
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