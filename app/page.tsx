"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import data from "../data/notifications.json";

type Notification = {
  id: number;
  avatar: {
    src: string;
  };
  name: string;
  action: string;
  link?: {
    text: string;
    url: string;
  };
  time: string;
  isRead: boolean;
  message?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export default function Home() {
  const [notifications, setNotifications] = useState<Notification[]>(
    data.notifications,
  );

  return (
    <main>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className="flex flex-row gap-x-3 p-4">
            <Image
              src={notification.avatar.src}
              alt={notification.name}
              width={50}
              height={50}
              className="h-10 w-10"
            />
            <div className="flex-1">
              <p>
                <span>{notification.name}</span>{" "}
                <span>{notification.action}</span>{" "}
                {notification.link && (
                  <a href={notification.link.url}>{notification.link.text}</a>
                )}
                {!notification.isRead && (
                  <span className="block h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </p>
              <time>{notification.time}</time>
              {notification.message && <p>{notification.message}</p>}
            </div>
            {notification.image && (
              <Image
                src={notification.image.src}
                alt={notification.image.alt}
                width={50}
                height={50}
                className="h-10 w-10"
              />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
