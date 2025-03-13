import config from "../config/config.js";
import {Client, Databases,Storage,Query, ID} from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    // Post methods
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("createpost error",error);
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("update post error::",error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("delete post error::",error);
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("get post ka error",error);
            
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        // ,Query.limit(30),Query.offset(0)
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("get posts ka error",error);
            return false;
        }
    }


    // files methods

    async uploadFile(file) {
        try {
          console.log("Uploading file:", file);
          const response = await this.bucket.createFile(
            config.appwriteBucketId,
            ID.unique(),
            file,
          );
          console.log("File uploaded successfully:", response);
          return response;
        } catch (error) {
          console.error("uploadFile error:", error);
          throw error; // Re-throw the error for the caller to handle
        }
      }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        }
        
        catch (error) {
            console.log("delter file ka error",error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        );
    }
    

    

}

const service = new Service()

export default service