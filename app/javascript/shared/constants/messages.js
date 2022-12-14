export const MESSAGE_STATUS = {
  FAILED: 'failed',
  SENT: 'sent',
  PROGRESS: 'progress',
};

export const MESSAGE_TYPE = {
  INCOMING: 0,
  OUTGOING: 1,
  ACTIVITY: 2,
  TEMPLATE: 3,
};
// Size in mega bytes
export const MAXIMUM_FILE_UPLOAD_SIZE = 40;

export const ALLOWED_FILE_TYPES =
  'image/*,' +
  'audio/*,' +
  'video/*,' +
  '.3gpp,' +
  'text/csv, text/plain, application/json, application/pdf, text/rtf,' +
  'application/zip, application/x-7z-compressed application/vnd.rar application/x-tar,' +
  'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/vnd.oasis.opendocument.text,' +
  'application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' +
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document,';

  export const CSAT_RATINGS = [
    {
      key: 'disappointed',
      emoji: '1 😞',
      value: 1,
      color: '#FDAD2A',
    },
    {
      key: 'expressionless',
      emoji: '2 😑',
      value: 2,
      color: '#FFC532',
    },
    {
      key: 'neutral',
      emoji: '3 😐',
      value: 3,
      color: '#FCEC56',
    },
    {
      key: 'grinning',
      emoji: '4 😀',
      value: 4,
      color: '#6FD86F',
    },
    {
      key: 'smiling',
      emoji: '5 😍',
      value: 5,
      color: '#44CE4B',
    },
  ];
  