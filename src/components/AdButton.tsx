import { useCallback } from 'react';
import { AdInformation } from './Interfaces';

function AdButton({ setStateWithKey } : AdInformation) {
    const changeAd = useCallback((event) => {
        const value = event.target.value;
        setStateWithKey('ad', value);
    }, [setStateWithKey]);

    return (
        <div>
            <div>
                광고동의
                <input type="radio" value="true" name="ad" onClick={changeAd} /> 동의함
                <input type="radio" value="false" name="ad" onClick={changeAd} /> 동의안함
            </div>
        </div>
    );
}

export default AdButton;