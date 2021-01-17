function AdButton(props) {
    function changeAd(event) {
        const value = event.target.value;
        props.setStateWithKey('ad', value);
    }

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