import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';

const ReceiptFooter = ({ signerName }) => {
    return (
        <View>
            <Text style={styles.footerText}>
                Botol yang dikirimkan sudah sesuai pesanan dan diperiksa oleh:
            </Text>
            <View style={styles.footerBox}>
                <View style={styles.footerSignatureRow}>
                    <View style={styles.footerSignatureLeft}>
                        <Text>Nama Relasi</Text>
                        <Text>(Yang Menerima)</Text>
                    </View>
                    <View style={styles.footerSignatureRight}>
                        <Text>{signerName}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.hr, styles.hrLargeTop]} />
        </View>
    );
};

export default ReceiptFooter;