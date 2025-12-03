import IdUtil from "../../utils/IdUtil";
import BaseModel from "../Base.model";

type UserRole = 'student' | 'admin' | 'verifier'; 
// e.g., 'student', 'admin', 'recruiter'

export default abstract class User extends BaseModel {
    public name: string;
    public primaryEmail: string;
    public emails: string[];
    public profilePicture: string = "";
    private passwordHash?: string; // in case oauth is there, no hash
    public role: UserRole;
    public readonly createdAt: Date;
    public updatedAt?: Date;
    public version: number;

    public isAdmin(): boolean {
        return this.role === 'admin';
    }

    public isStudent(): boolean {
        return this.role === 'student';
    }

    public isVerifier(): boolean {
        return this.role === 'verifier';
    }

    constructor(
        name: string,
        primaryEmail: string,
        emails: string[] = [],
        role: UserRole,
        passwordHash?: string
    ) {
        const id = IdUtil.generateUUID();
        super(id);

        this.name = name;
        this.primaryEmail = primaryEmail;
        // fetch from gravatar or leave blank
        this.profilePicture = "";
        this.emails = emails;
        if(passwordHash){
            this.passwordHash = passwordHash;
        }
        this.role = role;

        const now = new Date();
        this.createdAt = now;
        this.updatedAt = now;
        this.version = 1;
    }
}