export const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(dateString.split('/').reverse().join('-')));
};