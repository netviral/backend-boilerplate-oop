import User from "./User.model";

export default class Admin extends User {
    constructor(name:string, primaryEmail:string, emails:string[], passwordHash?:string){
        super(name, primaryEmail, emails, "admin", passwordHash);
        console.log(`New Admin User created: ${this.name}`);
    }
}