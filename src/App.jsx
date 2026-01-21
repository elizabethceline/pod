import useReceipt from './hooks/useReceipt';
import SearchForm from './components/SearchForm';
import ReceiptDisplay from './components/ReceiptDisplay';
import Loader from './components/Loader';
import './App.css'

const App = () => {
  const {
    tripNumber,
    setTripNumber,
    receiptData,
    loading,
    fetchReceipt,
    downloadPDF,
  } = useReceipt();

  return (
    <div className="min-h-screen w-screen bg-neutral-100 py-8 px-4">
      <div className="w-[90%] sm:w-9/12 mx-auto">
        <SearchForm
          value={tripNumber}
          onChange={setTripNumber}
          onSubmit={fetchReceipt}
          loading={loading}
        />

        {loading && <Loader />}

        {!loading && receiptData && (
          <ReceiptDisplay data={receiptData} />
        )}
      </div>

    </div>
  );
};

export default App;
