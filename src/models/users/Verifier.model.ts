import User from "./User.model";

export default class Verifier extends User {
    constructor(name:string, primaryEmail:string, emails:string[], passwordHash?:string){
        super(name, primaryEmail, emails, "verifier", passwordHash);
        console.log(`New Verifier User created: ${this.name}`);
    } 
}