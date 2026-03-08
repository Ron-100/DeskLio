import type {Cards} from "../type/type.tsx"

type CarddataType = {
  carddata:Cards[]
}

function StatCard({carddata}: CarddataType) {

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {carddata.map((card) => (
            <div key={card.title} className="cursor-pointer bg-white dark:bg-(--zd12-color) p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-semibold tracking-tight text-(--zd6-color) dark:text-(--zd5-color)">
                    {card.title}
                  </p>
                  <p className="text-xs text-(--zd6-color) dark:text-(--zd5-color) mt-1">{card.content}</p>
                  <h2 className="text-4xl font-bold text-(--zd1-color)  mt-2">
                    {card.value}
                  </h2>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl">{card.icon}</div>
              </div>
            </div>
          ))}
        </div>
    )
}

export default StatCard
