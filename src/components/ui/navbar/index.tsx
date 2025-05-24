// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const menuData = [
//   {
//     label: "Home",
//     children: [
//       { label: "Home1", href: "/" },
//       { label: "Home2", href: "/home2" },
//     ],
//   },
//   { label: "About Us", href: "/about" },
//   {
//     label: "Pages",
//     children: [
//       { label: "Shop", href: "/shop" },
//       { label: "All Products", href: "/shop/products" },
//       { label: "Product Detail", href: "/shop/product/1" },
//       { label: "All Services", href: "/others/services" },
//       { label: "Service Detail", href: "/others/service/1" },
//       { label: "Cart", href: "/shop/cart" },
//       { label: "Checkout", href: "/shop/checkout" },
//     ],
//   },
//   {
//     label: "News",
//     children: [
//       { label: "Our News", href: "/others/news" },
//       { label: "News Detail", href: "/others/news/sample-news" },
//     ],
//   },
//   { label: "Contact", href: "/contact" },
// ];

// const Navbar = () => {
//   const [user, setUser] = useState<{ name: string } | null>({ name: "John" });

//   return (
//     <nav className="bg-gray-100 dark:bg-gray-900 shadow">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Dynamic Menu */}
//         <div className="flex gap-6 items-center">
//           {menuData.map((item, index) =>
//             item.children ? (
//               <Dropdown key={index} label={item.label}>
//                 {item.children.map((child, i) => (
//                   <DropdownItem key={i} href={child.href}>
//                     {child.label}
//                   </DropdownItem>
//                 ))}
//               </Dropdown>
//             ) : (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className="hover:text-blue-600 px-2 py-1"
//               >
//                 {item.label}
//               </Link>
//             )
//           )}
//         </div>

//         {/* Auth */}
//         <div>
//           {user ? (
//             <Dropdown label={user.name}>
//               <button
//                 onClick={() => setUser(null)}
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Logout
//               </button>
//               <DropdownItem href="/auth/profile">Profile</DropdownItem>
//             </Dropdown>
//           ) : (
//             <Dropdown label="Sign In">
//               <DropdownItem href="/auth/login">Login</DropdownItem>
//               <DropdownItem href="/auth/signup">Register</DropdownItem>
//             </Dropdown>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Dropdown Wrapper
// const Dropdown = ({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <button className="hover:text-blue-600 px-2 py-1">{label}</button>
//       {open && (
//         <div className="absolute left-0 mt-2 min-w-[180px] bg-white dark:bg-gray-800 shadow-lg rounded z-50">
//           <ul className="flex flex-col">{children}</ul>
//         </div>
//       )}
//     </div>
//   );
// };

// // Dropdown Item
// const DropdownItem = ({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) => (
//   <li>
//     <Link
//       href={href}
//       className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//     >
//       {children}
//     </Link>
//   </li>
// );

// export default Navbar;

"use client";
import React, { useState } from "react";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
const Navbar = () => {
  function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn(
          "fixed top-10 inset-x-0 w-11/12 flex justify-between items-center mx-auto z-50 rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input px-8 py-6",
          className
        )}
      >
        <div>
          <p className="text-black">logo</p>
        </div>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Home 1</HoveredLink>
              <HoveredLink href="/home2">Home 2</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/about">About Us</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Pages">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/shop">Shop</HoveredLink>
              <HoveredLink href="/shop/products">All product</HoveredLink>
              <HoveredLink href="/shop/product/1">Product Detail</HoveredLink>
              <HoveredLink href="/others/services">All Services</HoveredLink>
              <HoveredLink href="/others/service/1">Service Detail</HoveredLink>
              <HoveredLink href="/shop/cart">Cart</HoveredLink>
              <HoveredLink href="/shop/checkout">Checkout</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="News">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/others/news">Our Blog</HoveredLink>
              <HoveredLink href="/others/news/sample-news">
                Blog Details
              </HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/contact">Contact</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>{" "}
        </Menu>
        <div>
          <p className="text-black">jhcsbjh</p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
};

export default Navbar;
