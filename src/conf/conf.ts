const conf = {
    appwriteUrlApiEndpoint:String(import.meta.env.VITE_APPWRITE_URL_API_ENDPOINT),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
}

export default conf