import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Download } from 'lucide-react';
import ReceiptPdf from './pdf/ReceiptPdf';

const ReceiptDisplay = ({ data }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-6 border-b sm:flex justify-between items-center gap-4">
                <h2 className="text-xl font-bold text-gray-800 max-sm:mb-4 flex items-center gap-4 max-sm:text-lg">
                    Bukti Pengiriman
                </h2>

                <PDFDownloadLink
                    document={<ReceiptPdf data={data} />}
                    fileName={`Bukti-Pengiriman-${data.tripNumber}.pdf`}
                    className="inline-block flex items-center gap-4 rounded bg-success px-6 pb-2 pt-2.5 font-medium leading-normal text-white transition duration-150 ease-in-out !hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                    <Download className="w-4 h-4" />
                    Download PDF
                </PDFDownloadLink>
            </div>

            <div style={{ height: '80vh' }}>
                <PDFViewer width="100%" height="100%">
                    <ReceiptPdf data={data} />
                </PDFViewer>
            </div>
        </div>
    );
};

export default ReceiptDisplay;