export interface IDInformation {
    id : string,
    setStateWithKey : Function
};

export interface PwdInformation {
    pwd : string,
    setStateWithKey : Function
}

export interface NameInformation {
    name : string,
    setStateWithKey : Function
};

export interface PhoneInformation {
    phone : string,
    setStateWithKey : Function
};

export interface EmailInformation {
    email : string,
    setStateWithKey : Function
};

export interface AdInformation {
    setStateWithKey : Function
};

export interface JoinInformation {
    requestOptions : RequestInit | undefined,
    signup : Function,
    id : string,
    name : string,
    valid : boolean
};

export interface SignupInformation { 
    changeInput : Function
};

export interface SuccessInformation {
    id: string;
    name: string;
};