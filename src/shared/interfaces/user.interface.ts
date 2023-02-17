
export interface ITimeStamp{
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface IUser extends ITimeStamp{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    
}