
import { Link } from "react-router-dom"

export function SignIn() {
  return (
    <div className="flex flex-col h-full w-full bg-white relative">
      {/* Header with Back Button */}
      <div className="absolute top-0 left-0 w-full p-4 flex items-center">
        <Link 
          to="/welcome" 
          className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Link>
      </div>

      <div className="flex flex-col justify-center h-full px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h1>
          <p className="text-sm text-gray-500">Sign in to sync your clips.</p>
        </div>

        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 ml-1">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
            />
          </div>

          <button
            type="button"
            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg p-2.5 transition-colors shadow-sm shadow-indigo-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-indigo-600 font-semibold hover:text-indigo-700">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
