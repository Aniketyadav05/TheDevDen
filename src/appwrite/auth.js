import config from "../config/config";
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client()
    account; 

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Log in the user after account creation
                return await this.login({ email, password });
            } else {
                throw new Error("Account creation failed.");
            }
        } catch (error) {
            console.error("createAccount error", error);
            throw error; // Re-throw the error for the caller to handle
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("Appwrite service :: getCurrentUser :: user", user);
            return user;
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
    
            // Handle specific error cases
            if (error.code === 401 || error.type === "user_not_authenticated") {
                console.log("User is not authenticated. Redirecting to login...");
                // Redirect the user to the login page or perform other actions
                
            } else {
                console.error("Unexpected error:", error);
            }
    
            return null;
        }
    }
    

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("logout error::",error);
            
        }
    }
}

const authService = new AuthService()

export default authService;