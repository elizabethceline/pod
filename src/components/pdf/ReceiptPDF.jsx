import { Document, Font, Page, Text } from '@react-pdf/renderer';
import { styles } from './styles';

import ReceiptHeader from './ReceiptHeader';
import ReceiptTable from './ReceiptTable';
import ReceiptFooter from './ReceiptFooter';

Font.register({
    family: 'Verdana',
    src: '/fonts/Verdana.ttf',
});

Font.register({
    family: 'Verdana-Bold',
    src: '/fonts/Verdana-Bold.ttf',
});

const ReceiptPdf = ({ data }) => {
    return (
        <Document>
            <Page size="LETTER" style={styles.page}>
                <Text style={styles.title}>Bukti Pengiriman</Text>

                <ReceiptHeader data={data} />
                <ReceiptTable items={data.items} />
                <ReceiptFooter signerName={data.signerName} />
            </Page>
        </Document>
    );
};

export default ReceiptPdf;
