import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';

// helper functions for serial numbers layout
const chunkArray = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
};

const calculateColumnWidths = (rows) => {
    const COLS = 4;
    const maxLengths = Array(COLS).fill(0);

    rows.forEach(row => {
        row.forEach((val, idx) => {
            if (idx < COLS) {
                const length = val ? Math.min(val.length, 12) : 0;
                maxLengths[idx] = Math.max(maxLengths[idx], length);
            }
        });
    });

    return maxLengths.map(len =>
        len > 0 ? len * 11 + 10 : 80
    );
};

const ReceiptTable = ({ items }) => {
    const total = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <View>
            <Text style={styles.sectionTitle}>
                Botol dikirimkan
            </Text>

            <View style={styles.table}>
                {/* header */}
                <View style={[styles.tableRow, styles.tableHeaderRow]}>
                    <Text style={[styles.th, styles.colItem]}>
                        Item
                    </Text>
                    <Text style={[styles.th, styles.colQty, styles.textRight]}>
                        Jumlah
                    </Text>
                    <Text style={[styles.th, styles.colUnit]}>
                        Satuan
                    </Text>
                </View>

                {/* body */}
                {items.map((item, i) => {
                    const rows = chunkArray(item.serialNumbers, 4);
                    const colWidths = calculateColumnWidths(rows);

                    return (
                        <View key={i} style={styles.tableRow}>
                            <View style={[styles.td, styles.colItem]}>
                                <Text style={styles.serialItemName}>
                                    {item.name}
                                </Text>

                                <Text>Nomor serial:</Text>

                                {rows.map((row, rIdx) => (
                                    <View key={rIdx} style={styles.serialRow}>
                                        {Array.from({ length: 4 }).map((_, cIdx) => {
                                            const serial = row[cIdx] || '';

                                            return (
                                                <Text
                                                    key={cIdx}
                                                    style={[
                                                        styles.serialCell,
                                                        {
                                                            width: colWidths[cIdx],
                                                        },
                                                    ]}
                                                    wrap={false}
                                                >
                                                    {serial}
                                                </Text>
                                            );
                                        })}

                                    </View>
                                ))}
                            </View>

                            <Text
                                style={[
                                    styles.td,
                                    styles.colQty,
                                    styles.textRight,
                                ]}
                            >
                                {item.quantity}
                            </Text>

                            <Text style={[styles.td, styles.colUnit]}>
                                {item.unit}
                            </Text>
                        </View>
                    );
                })}

                {/* total */}
                <View style={[styles.tableRow, styles.tableTotalRow]}>
                    <Text style={[styles.td, styles.colItem]}>
                        Total botol yang dikirimkan
                    </Text>

                    <Text
                        style={[
                            styles.td,
                            styles.colQty,
                            styles.textRight,
                        ]}
                    >
                        {total}
                    </Text>

                    <Text style={[styles.td, styles.colUnit]} />
                </View>
            </View>

            <View style={[styles.hr, styles.hrLargeTop]} />
        </View>
    );
};

export default ReceiptTable;