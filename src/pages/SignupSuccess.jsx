import React from 'react';

class SignupSuccess extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    

    render() {
        const { name, id } = this.props;
        const dateToLocaleString = this.state.date.toLocaleString();
        return (

            <div>
                <div>
                    감사합니다! {name}님!
                </div>
                <div>
                    {id}로 {dateToLocaleString}에 가입되었어요!
                </div>
            </div>
        )
    }
}

export default SignupSuccess;