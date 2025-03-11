export interface Hospital{
    id?: number;
    name: string;
    mobileNo: string;
    secondaryMobileNo: string;
    emailid: string;
    status: number;
}

export const hospitalSchema = {
    name : {type: 'string', required: true},
    mobileNo: {type: 'string', required: true},
    secondaryMobileNo: {type: 'string'},
    emailid: {type: 'string', required: true},
    status: {type: 'number', required: true}
}

