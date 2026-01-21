const PROXY_URL = '/api'; 

export const deliveryReceiptService = {
  async fetchReceipt(tripNumber) {
    try {
      const response = await fetch(`${PROXY_URL}/trackabout/pod/${tripNumber}`);
      const rawData = await response.json();

      if (rawData.error) {
        const errorMsg = rawData.error.message || 'Unknown error occurred';
        // const errorDetails = rawData.error.details || '';
        // console.log('API Error Details:', errorDetails);
        // throw new Error(`${errorMsg}${errorDetails ? '\n\nDetails: ' + errorDetails : ''}`);
        throw new Error(errorMsg);
      }

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Trip Number not found');
        }
        throw new Error(`API Error: ${response.status}`);
      }

      if (!rawData || rawData.length === 0) {
        throw new Error('Trip Number not found');
      }

      const firstItem = rawData[0];
      const itemsMap = {};

      // aggregate items by product code
      rawData.forEach(item => {
        const key = item.productCode;
        if (!itemsMap[key]) {
          itemsMap[key] = {
            name: item.productName,
            serialNumbers: [],
            quantity: 0,
            unit: 'botol'
          };
        }
        itemsMap[key].serialNumbers.push(item.serialNumber);
        itemsMap[key].quantity += 1;
      });

      // convert map to array
      const items = Object.values(itemsMap);

      return {
        date: firstItem.tanggal.replace(/\./g, '/'),
        tripNumber: tripNumber.toUpperCase(),
        branchName: firstItem.namaCabang,
        receiver: firstItem.namaCustomer,
        customerId: firstItem.kodeCustomer,
        sender: firstItem.namaPengirim,
        signerName: firstItem.signerName,
        items: items
      };
    } catch (error) {
      if (error.message === 'Trip Number not found') {
        throw error;
      }
      throw error;
    }
  },
};