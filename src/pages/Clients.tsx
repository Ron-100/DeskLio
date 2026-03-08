import Container from '../layout/Container'

function Clients() {
    const clients = [
        {
            id: 1,
            name: "John Smith",
            email: "john@example.com",
            phone: "1234567890",
            projects: 2,
        },
        {
            id: 2,
            name: "Sarah Lee",
            email: "sarah@example.com",
            phone: "9876543210",
            projects: 1,
        },
    ];
    return (
        <>
        <Container classname={'py-8 px-12'}>
            <div className="space-y-6">

                <div className="flex items-center justify-between">
                    
                    <h1 className='text-2xl text-stone-800 dark:text-white font-medium'>Clients</h1>

                    <button className="px-4 py-2 rounded-lg bg-[#155DFC] hover:bg-[#0F4CD7] text-white text-sm font-medium shadow-md shadow-[#155DFC]/30">
                    + Add Client
                    </button>
                </div>

                <div className="bg-(--zd5-color) dark:bg-(--zdark-color) rounded-[10px] border border-stone-200 dark:border-(--zd12-color) shadow-sm overflow-hidden">
                    <div className="max-h-[28em] overflow-y-auto">
                        <table className="w-full text-left">
                            <thead className="z-10 sticky top-0 shadow bg-stone-50 dark:bg-(--zd12-color) border-b border-stone-200 dark:border-(--zd12-color)">
                                <tr>
                                    <th className="px-6 py-3 dark:text-(--zd5-color) text-xs font-semibold uppercase tracking-wide text-gray-500">Client Name</th>
                                    <th className="px-6 py-3 dark:text-(--zd5-color) text-xs font-semibold uppercase tracking-wide text-gray-500">Email</th>
                                    <th className="px-6 py-3 dark:text-(--zd5-color) text-xs font-semibold uppercase tracking-wide text-gray-500">Phone</th>
                                    <th className="px-6 py-3 dark:text-(--zd5-color) text-xs font-semibold uppercase tracking-wide text-gray-500">Projects</th>
                                    <th className="px-6 py-3 dark:text-(--zd5-color) text-xs font-semibold uppercase tracking-wide text-gray-500">Action</th>
                                </tr>
                            </thead>

                            {clients && clients.length > 0 ? (
                                <tbody className="divide-y divide-stone-200 dark:divide-(--zd125-color)">
                                    {clients.map((prop) => (
                                        <tr key={prop.id} className="group dark:bg-[#18181b] hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
                                            <td className="capitalize px-6 py-4 text-sm font-medium text-stone-800 dark:text-(--zd1-color)">{prop.name}</td>
                                            <td className="capitalize px-6 py-4 text-sm text-stone-600 dark:text-(--zd5-color)">{prop.email}</td>
                                            <td className="capitalize px-6 py-4 text-sm text-stone-600 dark:text-(--zd5-color)">{prop.phone}</td>
                                            <td className="capitalize px-6 py-4 text-sm text-stone-600 dark:text-(--zd5-color)">{prop.projects}</td>
                                            <td className="capitalize px-6 py-4 text-sm text-stone-600 dark:text-red-500 cursor-pointer">Delete</td>
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
                
            </div>

        </Container>
        </>
    )
}

export default Clients
