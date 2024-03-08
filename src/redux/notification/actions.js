import * as types from './types';

export const listNotificationsRequest = () => ({
  type: types.LIST_NOTIFICATION_REQUEST,
});

export const manageNotificationRequest = (subscribe) => ({
  type: subscribe ? types.SUBSCRIBE_NOTIFICATION_REQUEST : types.UNSUBSCRIBE_NOTIFICATION_REQUEST,
  payload: subscribe
});

