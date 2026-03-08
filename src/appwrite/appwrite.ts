import conf from "../conf/conf.ts";
import {Client, Account, ID} from 'appwrite'

type CreateAccountData = {
    name:string;
    email:string;
    password:string;
}

type LoginData = {
    email:string;
    password:string;
}

export class AppwriteService {
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrlApiEndpoint)
            .setProject(conf.appwriteProjectId)
            this.account = new Account(this.client)
    }

    async createAccount({name, email, password}:CreateAccountData){
        try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}:LoginData){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    } 
}

const appwriteService = new AppwriteService();
export default appwriteService;