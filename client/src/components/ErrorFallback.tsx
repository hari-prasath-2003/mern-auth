import { Button } from "@/components/ui/button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg  text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Oops, something went wrong!</h1>
        <p className="text-gray-600 mb-6">{error.message || "An unexpected error occurred. Please try again later."}</p>
        <Button className="px-4 py-2  text-white rounded transition duration-300" onClick={resetErrorBoundary}>
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default ErrorFallback;
