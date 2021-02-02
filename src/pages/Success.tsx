import { SuccessInformation } from '../components/Interfaces';

function Success(props : SuccessInformation) {
    const date = new Date();
    const dateToLocaleString = date.toLocaleString();

    return (
        <div>
            <div>
                감사합니다! {props.name}님!
            </div>
            <div>
                {props.id}로 {dateToLocaleString}에 가입되었어요!
            </div>
        </div>
    );
}

export default Success;