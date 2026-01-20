
import { Link } from "react-router-dom"

export function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-indigo-50 to-white px-6">
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="h-16 w-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-200 text-white text-2xl font-bold">
          C
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          Cliply
        </h1>
        <p className="text-gray-500 font-medium">
          Your second brain for clipboard.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Link
          to="/sign-in"
          className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 shadow-sm"
        >
          Sign In
        </Link>
        <Link
          to="/sign-up"
          className="flex items-center justify-center w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-4 rounded-lg border border-gray-200 transition-colors duration-200"
        >
          Create Account
        </Link>
      </div>
      
      <p className="mt-8 text-xs text-center text-gray-400">
        By continuing, you agree to our Terms & Conditions.
      </p>
    </div>
  )
}
