import { useEffect, useState } from 'react';

export const useBarcode = (tripNumber) => {
    const [barcodeDataUrl, setBarcodeDataUrl] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const generateBarcode = async () => {
            if (!tripNumber) {
                setBarcodeDataUrl('');
                return;
            }

            try {
                setError(null);

                const bwipjs = await import('bwip-js/browser');

                const canvas = document.createElement('canvas');

                bwipjs.toCanvas(canvas, {
                    bcid: 'code128',
                    text: tripNumber.toUpperCase(),
                    scale: 3,
                    height: 10,
                    includetext: false,
                });

                setBarcodeDataUrl(canvas.toDataURL('image/png'));
            } catch (err) {
                console.error('Error generating barcode:', err);
                setError(err.message);
                setBarcodeDataUrl('');
            }
        };

        generateBarcode();
    }, [tripNumber]);

    return { barcodeDataUrl, error };
};