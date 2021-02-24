import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () =>
      // os 2 !! server para verificar se a busca foi encontrada, sendo true ou false
      !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notification/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notification');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p> {notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
