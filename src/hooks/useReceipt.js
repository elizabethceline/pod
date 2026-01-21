import { useState } from 'react';
import { deliveryReceiptService } from '../services/deliveryReceiptService';

const useReceipt = () => {
  const [tripNumber, setTripNumber] = useState('');
  const [receiptData, setReceiptData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchReceipt = async () => {
    if (!tripNumber.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Trip Number is required',
        text: 'Please enter a trip number',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    setLoading(true);

    try {
      const data = await deliveryReceiptService.fetchReceipt(tripNumber);
      setReceiptData(data);
    } catch (e) {
      setReceiptData(null);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: e.message || 'Trip Number not found',
        confirmButtonColor: '#3085d6',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    tripNumber,
    setTripNumber,
    receiptData,
    loading,
    fetchReceipt,
  };
};

export default useReceipt;