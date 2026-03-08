import AddProjectForm from '../components/AddProjectForm';
import ProjectsTable from '../components/ProjectsTable';
import Container from '../layout/Container'

function Project(){

    return (
        <>
        <Container classname={'py-8 px-12'}>
            <div className="space-y-6">
                    
                <div className="flex items-center justify-between">
                    <h1 className='text-2xl text-stone-800 dark:text-white font-medium'>Projects</h1>

                    <div>
                        <input type="text" placeholder="Search projects..." className="w-full md:w-72 px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#155DFC] outline-none text-sm"/>
                    </div>
                </div>
                <AddProjectForm />
                <ProjectsTable/>
            </div>
        </Container>
        </>
    )
}

export default Project
