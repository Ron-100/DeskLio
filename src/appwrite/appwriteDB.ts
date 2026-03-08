import conf from "../conf/conf";
import {Client, ID, Databases, Query} from 'appwrite'
import type { ProjectDocument } from "../type/type";

type CreateDataType = {
    name:string,
    client:string,
    status:string,
    time:string,
    userId:string
    userName:string
}

export class DBAppwriteService {
    client = new Client();
    databases;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrlApiEndpoint)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createData({name, client, status, time, userId, userName}:CreateDataType){
        try {
            return await this.databases.createDocument<ProjectDocument>(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    name,
                    client,
                    status,
                    time,
                    userId,
                    userName
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deleteData(id:string){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id
            )
            return true
        } catch (error) {
            throw error
        }
    }

    async listData(userId:string){
        try {
            return await this.databases.listDocuments<ProjectDocument>(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal('userId', userId)
                ]
            ) 
        } catch (error) {
            throw error
        }
    }

    async recentListData(userId:string){
        try {
            return await this.databases.listDocuments<ProjectDocument>(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal('userId', userId),
                    Query.orderDesc("$createdAt"),
                    Query.limit(5)
                ]
            ) 
        } catch (error) {
            throw error
        }
    }
}

const dbAppwriteService = new DBAppwriteService();
export default dbAppwriteService;