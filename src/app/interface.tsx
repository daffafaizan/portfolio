"use client";

import Terminal from "@/components/terminal/terminal";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Interface({
  terminalFont,
  normalFont,
  children,
}: {
  terminalFont: any;
  normalFont: any;
  children: any;
}) {
  const [ui, setUI] = useState("");
  useEffect(() => {
    const cookie = Cookies.get("ui");
    if (cookie == null) {
      Cookies.set("ui", "gui");
      setUI("gui");
    } else {
      setUI(cookie);
    }
  }, []);

  return (
    <body
      className={`${
        ui === "gui" ? normalFont.className : terminalFont.className
      } bg-[#101820]`}
    >
      {ui === "terminal" ? (
        <Terminal />
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </body>
  );
}
