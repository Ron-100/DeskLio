import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { AppDispatch, RootState } from "../store/store";
import { addProject } from '../store/addProjectSlice'
import dbAppwriteService from "../appwrite/appwriteDB";

export default function AddProjectForm() {

    type DataType = {
        project:string,
        client:string,
        status:string,
        time:string ,
        userName?:string
    }

    const {register, handleSubmit, reset} = useForm<DataType>()
    const user = useSelector((state:RootState)=> state.auth.data)
    const dispatch = useDispatch<AppDispatch>()
    const onSubmit:SubmitHandler<DataType> = async (data) => {
        if (!user?.$id) {
            console.log("User not logged in");
            return;
        }

        try {
            const info = await dbAppwriteService.createData({
                name: data.project,
                client: data.client,
                status: data.status,
                time: data.time,
                userId: user.$id,
                userName: user?.name ?? "None"
            })
            
            dispatch(addProject(info))
            reset()
        } catch (error) {
            console.log(error);
        }
    }   

  return (
        <div className="w-full bg-white dark:bg-(--zd12-color)  border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                
                {/* Project Name */}
                <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-600 dark:text-(--zd5-color) mb-1">
                    Project Name
                </label>
                <Input type="text" placeholder="Website Redesign"
                            {...register('project',{
                                required:true,
                            })} 
                            className="w-full px-3 py-2 rounded-lg
                            bg-gray-50 dark:bg-zinc-900
                            border border-gray-300 dark:border-zinc-700
                            text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-[#155DFC]
                            outline-none transition text-sm" />
                </div>

                {/* Client */}
                <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-(--zd5-color) mb-1">
                    Client
                </label>
                <Input
                    type="text"
                    placeholder="Dizy Lio"
                    {...register('client',{
                        required:true
                    })}
                    className="w-full px-3 py-2 rounded-lg
                            bg-gray-50 dark:bg-zinc-900
                            border border-gray-300 dark:border-zinc-700
                            text-gray-900 dark:text-white
                            focus:ring-2 focus:ring-[#155DFC]
                            outline-none transition text-sm"
                />
                </div>

                {/* Status */}
                <div className="w-full">
                    <label className="block text-xs font-medium text-gray-600 dark:text-(--zd5-color) mb-1">
                        Status
                    </label>
                    <select
                        {...register('status',{
                            required:true
                        })}
                        className="w-full px-3 py-2.25 rounded-lg
                                bg-gray-50 dark:bg-zinc-900
                                border border-gray-300 dark:border-zinc-700
                                text-gray-900 dark:text-white
                                focus:ring-2 focus:ring-[#155DFC]
                                outline-none transition text-sm">
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select>
                </div>

                {/* Deadline */}
                <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-(--zd5-color) mb-1">
                        Deadline
                    </label>
                    <Input
                        type="date"
                        {...register('time',{
                            required:true
                        })}
                        className="w-full px-3 py-2 rounded-lg
                                bg-gray-50 dark:bg-zinc-900
                                border border-gray-300 dark:border-zinc-700
                                text-gray-900 dark:text-white
                                focus:ring-2 focus:ring-[#155DFC]
                                outline-none transition text-sm"
                    />
                </div>

                {/* Button */}
                <div>
                    <button
                        type="submit"
                        className="cursor-pointer w-full px-4 py-2.25 rounded-lg
                                bg-(--zd11-color) dark:bg-(--zd11-color) hover:bg-(--zd11a-color) dark:hover:bg-(--zd11a-color) active:scale-97
                                text-(--zd5-color) dark:text-(--zd5-color) text-sm font-medium
                                shadow-md shadow-[#155DFC]/30 dark:shadow-(--zd5-color)/30
                                transition-all"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
  );
}
