import { FileText } from 'lucide-react';

const SearchForm = ({ value, onChange, onSubmit, loading }) => {
    return (
        <div className="bg-white rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-4 max-sm:text-xl">
                <FileText className="w-6 h-6" />
                Generate Bukti Pengiriman
            </h1>

            <div className="sm:flex gap-3">
                <input
                    type="text"
                    placeholder="Input Trip Number"
                    value={value}
                    disabled={loading}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary max-sm:w-full"
                />
                <p className="sm:hidden text-sm text-gray-500 mt-2 mb-4">
                    Contoh: SGIO827006
                </p>

                <button
                    type="button"
                    onClick={onSubmit}
                    disabled={!value || loading}
                    className="max-sm:w-full inline-block rounded bg-primary px-6 pb-2 pt-2.5 font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 disabled:bg-gray-300 disabled:cursor-not-allowed focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                    {loading ? 'Loading...' : 'Generate'}
                </button>
            </div>

            <p className="max-sm:hidden text-sm text-gray-500 mt-2">
                Contoh: SGIO827006
            </p>
        </div>
    );
};

export default SearchForm;