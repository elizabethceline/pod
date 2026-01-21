import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';
import { useBarcode } from '../../hooks/useBarcode';
import { formatDate } from '../../utils/dateFormatter';

const ReceiptHeader = ({ data }) => {
    const { barcodeDataUrl, error } = useBarcode(data.tripNumber);
    const dateFormatted = formatDate(data.date);

    const fields = [
        ['Tanggal', dateFormatted],
        ['Nomor Surat Jalan', data.tripNumber],
        ['Nama Cabang', data.branchName],
        ['Dikirimkan kepada', data.receiver],
        ['Kode customer', data.customerId],
        ['Nama Pengirim', data.sender],
    ];

    return (
        <View>
            {/* header image */}
            <View style={styles.headerImageRow}>
                <View style={styles.headerImageBox}>
                    <Image
                        style={[styles.headerImage, { width: '150%', height: '150%' }]}
                        src="/images/logo.jpeg"
                    />
                </View>
                <View style={styles.headerImageBox}>
                    {barcodeDataUrl ? (
                        <Image style={styles.headerImage} src={barcodeDataUrl} />
                    ) : error ? (
                        <Text style={{ fontSize: 8, color: 'red' }}>
                            Failed to generate barcode
                        </Text>
                    ) : (
                        <Text style={{ fontSize: 8 }}>Generating barcode...</Text>
                    )}
                </View>
            </View>

            {/* header fields */}
            {fields.map(([label, value], i) => (
                <View key={i}>
                    <View style={styles.row2}>
                        <Text style={[styles.bold, { width: '50%' }]}>
                            {label}
                        </Text>
                        <Text>{value}</Text>
                    </View>
                    {(i === 2 || i === 5) && <View style={styles.hr} />}
                </View>
            ))}
        </View>
    );
};

export default ReceiptHeader;