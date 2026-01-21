import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
        padding: 72,
        fontSize: 10,
        lineHeight: 1.25,
        fontFamily: 'Verdana',
    },

    // typography
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Verdana-Bold',
        marginBottom: 24,
    },

    bold: {
        fontWeight: 'bold',
        fontFamily: 'Verdana-Bold',
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontFamily: 'Verdana-Bold',
        marginVertical: 16,
        fontSize: 14,
    },

    textRight: {
        textAlign: 'right',
    },

    // layout
    row2: {
        flexDirection: 'row'
    },

    hr: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#d1d5db',
        marginVertical: 12,
    },

    hrLargeTop: {
        marginTop: 24,
    },

    // header images
    headerImageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerImageBox: {
        width: 120,
        height: 50,
        marginBottom: 16,
    },

    headerImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },

    // table
    table: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#d1d5db',
    },

    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d1d5db',
    },

    tableHeaderRow: {
        backgroundColor: '#dedede',
    },

    tableTotalRow: {
        backgroundColor: '#f5f5f5',
    },

    th: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        fontWeight: 'bold',
        fontFamily: 'Verdana-Bold',
    },

    td: {
        padding: 8,
    },

    colItem: {
        width: '65%',
    },

    colQty: {
        width: '15%',
    },

    colUnit: {
        width: '20%',
    },

    // serial numbers
    serialRow: {
        flexDirection: 'row',
        marginLeft: 4,
    },

    serialCell: {
        fontSize: 10,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },

    serialItemName: {
        marginBottom: 8,
    },

    // footer
    footerText: {
        marginTop: 4,
    },

    footerBox: {
        marginTop: 32,
        width: '50%',
        height: 120,
        borderWidth: 1,
        borderColor: '#a0a5ac',
        padding: 4,
        justifyContent: 'flex-end',
    },

    footerSignatureRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    footerSignatureLeft: {
        flexDirection: 'column',
    },

    footerSignatureRight: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingBottom: 4,
    },
});
