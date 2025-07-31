// dateUtils.js

/**
 * Ant Design DatePicker'dan gelen dayjs objesini Türkçe tarih formatına çevirir
 * @param {Object} dayjsObject - Ant Design DatePicker'dan gelen dayjs objesi
 * @returns {string} - "28 temmuz 2025" formatında string
 */
export const formatDateToTurkish = (dayjsObject) => {
  if (!dayjsObject || !dayjsObject.$d) {
    return '';
  }

  const months = [
    'ocak', 'şubat', 'mart', 'nisan', 'mayıs', 'haziran',
    'temmuz', 'ağustos', 'eylül', 'ekim', 'kasım', 'aralık'
  ];

  const date = new Date(dayjsObject.$d);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

/**
 * Normal Date objesini Türkçe tarih formatına çevirir
 * @param {Date} dateObject - JavaScript Date objesi
 * @returns {string} - "28 temmuz 2025" formatında string
 */
export const formatJSDateToTurkish = (dateObject) => {
  if (!dateObject || !(dateObject instanceof Date)) {
    return '';
  }

  const months = [
    'ocak', 'şubat', 'mart', 'nisan', 'mayıs', 'haziran',
    'temmuz', 'ağustos', 'eylül', 'ekim', 'kasım', 'aralık'
  ];

  const day = dateObject.getDate();
  const month = months[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${day} ${month} ${year}`;
};

/**
 * Dayjs formatından JavaScript Date'e çevirir
 * @param {Object} dayjsObject - Dayjs objesi
 * @returns {Date} - JavaScript Date objesi
 */
export const dayjsToJSDate = (dayjsObject) => {
  if (!dayjsObject || !dayjsObject.$d) {
    return null;
  }
  return new Date(dayjsObject.$d);
};
