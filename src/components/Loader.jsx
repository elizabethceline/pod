const Loader = () => {
    return (
        <div className="bg-white rounded-lg p-12 flex flex-col items-center justify-center">
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-4 text-gray-600 font-medium">Loading data...</p>
            <p className="text-sm text-gray-400">This may take a few seconds</p>
        </div>
    );
};

export default Loader;