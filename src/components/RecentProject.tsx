import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import appwriteService from "../appwrite/appwrite";
import dbAppwriteService from "../appwrite/appwriteDB";
import { setPojects } from "../store/addProjectSlice";

function RecentProject() {
    const projectData = useSelector((state:RootState)=> state.projects.data)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        const fetchProject = async () => {
            try {
                const user = await appwriteService.getCurrentUser()

                if (!user) return

                const response = await dbAppwriteService.recentListData(user.$id)
                dispatch(setPojects(response.documents))
            } catch (error) {
                console.log(error);
            }
        }
        fetchProject()
    },[dispatch])

    return (
        <div className="bg-(--zd5-color) dark:bg-(--zdark-color) rounded-[10px] border border-stone-200 dark:border-(--zd12-color) shadow-sm overflow-hidden">
            <div className="max-h-[28em] overflow-y-auto">
                <table className="w-full text-left">
                    <thead className="z-10 sticky top-0 shadow bg-stone-50 dark:bg-(--zd12-color) border-b border-stone-200 dark:border-(--zd12-color)">
                        <tr>
                            <th className="px-6 py-3 dark:text-(--zd5-color) text-xs font-semibold uppercase tracking-wide text-gray-500">Project</th>
                            <th className="px-6 py-3 dark:text-(--zd5-color) text-xs font-semibold uppercase tracking-wide text-gray-500">Client</th>
                            <th className="px-6 py-3 dark:text-(--zd5-color) text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
                            <th className="px-6 py-3 dark:text-(--zd5-color) text-xs font-semibold uppercase tracking-wide text-gray-500">Deadline</th>
                        </tr>
                    </thead>

                    {projectData && projectData.length > 0 ? (
                        <tbody className="divide-y divide-stone-200 dark:divide-(--zd125-color)">
                            {projectData.map((prop) => (
                                <tr key={prop.$id} className="group dark:bg-[#18181b] hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
                                    <td className="capitalize px-6 py-4 text-sm font-medium text-stone-800 dark:text-(--zd1-color)">{prop.name}</td>
                                    <td className="capitalize px-6 py-4 text-sm text-stone-600 dark:text-(--zd5-color)">{prop.client}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${prop.status !== "Completed" ? 'bg-amber-50 text-amber-600' : 'bg-(--zd17-color) text-(--zd16-color)'}`}>{prop.status}</span>
                                    </td>
                                    <td className="flex justify-between items-center px-6 py-4 text-sm text-stone-600 dark:text-(--zd5-color)">
                                        {new Date(prop.time).toLocaleDateString()}
                                        <span /*onClick={()=> handleDelete(prop.id)}*/ className="cursor-pointer ">
                                            <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-(--zd11-color) ">Details</span>
                                        </span> 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan={4} className="h-36">
                                    <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-2">
                                    <p className="text-lg">No Projects Yet</p>
                                    <p className="text-sm">Start by adding your first project.</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}

export default RecentProject
