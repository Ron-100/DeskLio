// We used useEffect before but for Protected Route is not need //
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";

function ProtectedRoute({ children }:{children: ReactNode;}) {
  const userStatus = useSelector((state: RootState) => state.auth.status);

  if (userStatus === null) {
    return (
      <div className="relative h-32 bg-gray-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center">
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                  Loading content...
              </p>
            </div>
        </div>
      </div>
    )
  } 
  
  if (userStatus !== true) {
    return <Navigate to='/sign-login' replace/>
  }

  return <>{children}</>
}

export default ProtectedRoute;
