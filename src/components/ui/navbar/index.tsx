"use client";

import { useState } from "react";
import Link from "next/link";

const menuData = [
  {
    label: "Home",
    children: [
      { label: "Home1", href: "/" },
      { label: "Home2", href: "/home2" },
    ],
  },
  { label: "About Us", href: "/about" },
  {
    label: "Pages",
    children: [
      { label: "Shop", href: "/shop" },
      { label: "All Products", href: "/shop/products" },
      { label: "Product Detail", href: "/shop/product/1" },
      { label: "All Services", href: "/others/services" },
      { label: "Service Detail", href: "/others/service/1" },
      { label: "Cart", href: "/shop/cart" },
      { label: "Checkout", href: "/shop/checkout" },
    ],
  },
  {
    label: "News",
    children: [
      { label: "Our News", href: "/others/news" },
      { label: "News Detail", href: "/others/news/sample-news" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [user, setUser] = useState<{ name: string } | null>({ name: "John" });

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Dynamic Menu */}
        <div className="flex gap-6 items-center">
          {menuData.map((item, index) =>
            item.children ? (
              <Dropdown key={index} label={item.label}>
                {item.children.map((child, i) => (
                  <DropdownItem key={i} href={child.href}>
                    {child.label}
                  </DropdownItem>
                ))}
              </Dropdown>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="hover:text-blue-600 px-2 py-1"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Auth */}
        <div>
          {user ? (
            <Dropdown label={user.name}>
              <button
                onClick={() => setUser(null)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </button>
              <DropdownItem href="/auth/profile">Profile</DropdownItem>
            </Dropdown>
          ) : (
            <Dropdown label="Sign In">
              <DropdownItem href="/auth/login">Login</DropdownItem>
              <DropdownItem href="/auth/signup">Register</DropdownItem>
            </Dropdown>
          )}
        </div>
      </div>
    </nav>
  );
};

// Dropdown Wrapper
const Dropdown = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="hover:text-blue-600 px-2 py-1">{label}</button>
      {open && (
        <div className="absolute left-0 mt-2 min-w-[180px] bg-white dark:bg-gray-800 shadow-lg rounded z-50">
          <ul className="flex flex-col">{children}</ul>
        </div>
      )}
    </div>
  );
};

// Dropdown Item
const DropdownItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
