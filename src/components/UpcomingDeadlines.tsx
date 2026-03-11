import { Calendar, ChevronRight, User } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

type Project = {
  name: string;
  client: string;
  daysLeft: number;
};

const ProjectItem = ({ name, client, daysLeft }: Project) => {

  const getStatusStyles = (days: number) => {
    if (days <= 2) return "bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20";
    if (days <= 5) return "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";
    return "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
  };

  return (
    <div className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-(--zd12-color) p-5 transition-all duration-300 hover:border-indigo-100 dark:hover:border-indigo-500/30 shadow hover:shadow-[0_20px_50px_rgba(79,70,229,0.07)]">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 border border-slate-100 dark:border-slate-700 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-500 transition-colors">
          <User size={20} />
        </div>

        <div>
          <h4 className="text-[15px] font-semibold tracking-tight text-slate-800 dark:text-slate-100">
            {name}
          </h4>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {client}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <div className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyles(daysLeft)}`}>
          <Calendar size={13} />
          {daysLeft} days left
        </div>

        <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-200 transition-all">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />

    </div>
  );
};

export default function ProjectDashboard() {

  const projects = useSelector((state:RootState)=> state.projects.data)
  
  const upcomingProject = projects.filter((project) => {
    return new Date(project.time) > new Date()
  })

  const sortedDeadlines = upcomingProject.sort(
    (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
  )

  const upcomingDeadlines = sortedDeadlines.slice(0, 3)

  const getDaysleft = (deadline: string) => {
    const today = new Date()
    const due = new Date(deadline)

    const diff = due.getTime() - today.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }


  return (
    <div className="">
      <div className="">
        <div className="space-y-3">
          {upcomingDeadlines.map((project) => (
            <ProjectItem
              key={project.name}
              name={project.name}
              client={project.client}
              daysLeft={getDaysleft(project.time)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}