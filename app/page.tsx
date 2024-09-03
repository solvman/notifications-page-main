"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/utils/utils";
import data from "@/data/notifications.json";

type Notification = {
  id: number;
  user: {
    name: string;
    href: string;
    avatar: {
      src: string;
    };
  };
  action: string;
  link?: {
    text: string;
    url: string;
  };
  time: string;
  isUnread: boolean;
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

  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  ).length;

  function markAsRead(id: number) {
    setNotifications((notifications) =>
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isUnread: false }
          : notification,
      ),
    );
  }

  function markAllAsRead() {
    setNotifications((notifications) =>
      notifications.map((notification) => ({
        ...notification,
        isUnread: false,
      })),
    );
  }

  return (
    <main className="md:grid md:h-screen md:place-items-center">
      <h1 className="sr-only">Notification page project</h1>
      <article className="bg-site-white p-4 md:max-w-[730px] md:rounded-2xl md:shadow-2xl">
        <header className="flex flex-row gap-2 py-6">
          <h2 className="text-site-clamp-20px-24px text-site-very-dark-blue font-extrabold">
            Notifications
          </h2>
          <span className="bg-site-blue text-site-white flex flex-row items-center justify-center rounded-md px-3 font-extrabold">
            {unreadNotifications}
          </span>
          <button
            onClick={markAllAsRead}
            className="text-site-dark-grey-blue hover:text-site-blue ml-auto font-medium transition-colors duration-200 ease-in-out"
          >
            Mark all as read
          </button>
        </header>
        <ul className="flex flex-col gap-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={cn(
                "flex flex-row gap-x-3 rounded-lg p-4 transition-colors duration-200 ease-in-out",
                notification.isUnread && "bg-site-snow cursor-pointer",
              )}
              onClick={() => markAsRead(notification.id)}
            >
              <Image
                src={notification.user.avatar.src}
                alt={notification.user.name}
                width={50}
                height={50}
                className="w-site-clamp-39px-45px h-site-clamp-39px-45px"
              />
              <div className="flex-1">
                <p>
                  <a
                    className="text-site-very-dark-blue hover:text-site-blue font-extrabold"
                    href={notification.user.href}
                  >
                    {notification.user.name}
                  </a>{" "}
                  <span>{notification.action}</span>
                  {notification.link && (
                    <>
                      {" "}
                      <Link
                        href={notification.link.url}
                        className="hover:text-site-blue font-bold transition-colors duration-200 ease-in-out"
                      >
                        {notification.link.text}
                      </Link>
                    </>
                  )}
                  {notification.isUnread && (
                    <span className="ml-1 inline-block h-2 w-2 rounded-full bg-red-500"></span>
                  )}
                </p>
                <time className="text-site-grey-blue">{notification.time}</time>
                {notification.message && (
                  <p className="border-site-light-grey-blue hover:bg-site-light-grey-blue hover:border-site-very-light-grey-blue mt-3 cursor-pointer rounded-md border p-4 transition-colors duration-200 ease-in-out">
                    {notification.message}
                  </p>
                )}
              </div>
              {notification.image && (
                <Image
                  src={notification.image.src}
                  alt={notification.image.alt}
                  width={50}
                  height={50}
                  className="w-site-clamp-39px-45px h-site-clamp-39px-45px"
                />
              )}
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
