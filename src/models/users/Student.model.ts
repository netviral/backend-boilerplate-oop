import User from "./User.model";

export default class Student extends User {
    constructor(name:string, primaryEmail:string, emails:string[], passwordHash?:string){
        super(name, primaryEmail, emails, "student", passwordHash);
        console.log(`New Student User created: ${this.name}`);
    }
}