import Container from "../layout/Container";
import StatCard from "../components/StatCard";
import { FiUsers, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import { MdOutlinePending } from "react-icons/md";
import type {Cards} from "../type/type.tsx" 
import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import UpcomingDeadlines from "../components/UpcomingDeadlines.tsx";
import DonutTaskChart from "../components/DonutTaskChart.tsx";
import RecentProject from "../components/RecentProject.tsx";
// import DashboardSkeleton from "../Loader/DashboardSkeleton.tsx";

function Dashboard() {

    // Dynamic Data Table //
        const tableData = useSelector((state:RootState) => state.projects.data)
    
        //It's check and calculate how many client are there
        const totalClients = new Set(tableData.map((p) => (p.client))).size;
        
        //It's check and calculate how active projects are there
        const activeProjects = tableData.filter((p) => (p.status === "In Progress")).length;
        
        //It's check and calculate how completed projects are there
        const completedProjects = tableData.filter((p) => (p.status === "Completed")).length;
        
    // Dynamic Data Table //


    
    // Cards //

        const cardId = crypto.randomUUID()

        const cards: Cards[] = [
            {   
                id:cardId,
                title: "Total Clients",
                content: "All registered clients in your workspace",
                value: totalClients,
                icon: <FiUsers className="text-xl text-(--zd1-color)" />,
            },
            {
                id:cardId,
                title: "Active Projects",
                content: "Projects currently in progress",
                value: activeProjects,
                icon: <FiBriefcase className="text-xl text-(--zd1-color)" />,
            },
            {
                id:cardId,
                title: "Completed Projects",
                content: "Successfully delivered projects",
                value: completedProjects,
                icon: <FiCheckCircle className="text-xl text-(--zd1-color)" />,
            },
            {
                id:cardId,
                title: "Pending Projects",
                content: "Projects awaiting progress",
                value: completedProjects,
                icon: <MdOutlinePending className="text-xl text-(--zd1-color)" />,
            },
        ];

    // Cards //

  return (
    <>
      <Container classname={'py-8 px-12'}>
        <h1 className="text-2xl text-(--zd6-color) dark:text-(--zd5-color) font-medium">Dashboard</h1>
        
        {/* Cards */}
        <div className="w-full h-auto flex p-2.5 rounded-2xl ">
            <div className="w-[30%] flex justify-center items-center">
                <DonutTaskChart/>
            </div>
            <div className="w-[70%]">
                <StatCard carddata={cards}/>
            </div>
        </div>
        {/* Cards */}

        {/* Project Data Tabel */}
            <div className="flex justify-between items-center mb-1 mt-10">
                <h2 className="text-2xl font-medium text-(--zd6-color) dark:text-(--zd5-color) mb-4">
                    Recent Projects
                </h2>

                {/* <button className="text-sm text-(--zd6-color) dark:text-(--zd5-color) hover:underline">
                    View All
                </button> */}
            </div>
            <div className="h-5"></div>
            <RecentProject />
            <div className="my-18">
                <h1 className="text-2xl mb-6 text-(--zd6-color) dark:text-(--zd5-color) font-medium">Upcoming Deadlines</h1>
                <UpcomingDeadlines/>
            </div>
        {/* Project Data Tabel */}
      </Container>
    </>
  );
}

export default Dashboard;
