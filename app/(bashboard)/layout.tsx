"use client";

import { Sidebar_General, Sidebar_Menu } from "@/constants/const-sidebar";
import { ISidebarItem } from "@/types/share";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    // const [selectedMenu, setSelectedMenu] = useState("Admin Functions");
    const pathName = usePathname();
    return (
      <div className="h-screen w-full overflow-hidden bg-[#e3edf67c]">
        <div className="flex h-[150px] w-full flex-row bg-[#1450A3]">
       
      </div>
      <section className="flex h-[calc(100%-150px)] overflow-hidden">
        <section>
          <div className="sticky left-0 top-0 flex h-full w-[300px] flex-col gap-6 bg-[#191D88]">
            <div></div>
            {Sidebar_Menu.map((item: ISidebarItem) => {
              const isActive = pathName === item.route;

              return (
                <Link
                  key={item.route}
                  href={item.route}
                //   onClick={() => setSelectedMenu(item.label)}
                >
                  <div
                    className={` mx-auto flex p-2  ${isActive ? " bg-sky-500" : "bg-inherit hover:bg-sky-400"} `}
                  >
                    <Image
                      src={item.imgURL}
                      alt={item.label}
                      width={30}
                      height={20}
                    />
                    <span
                      className={`mx-3 p-2 text-xl ${isActive ? "font-bold" : ""}  text-white `}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
            <div className="mt-auto flex flex-col gap-4">
              {Sidebar_General.map((item: ISidebarItem) => {
                const isActive = pathName === item.route;

                return (
                  <Link key={item.route} href={item.route}>
                    <div
                      className={` mx-auto flex  p-2 ${isActive ? " bg-sky-500" : "bg-inherit hover:bg-sky-400"} `}
                    >
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={30}
                        height={20}
                      />
                      <span
                        className={`mx-3 p-2 text-xl ${isActive ? "font-bold" : ""}  text-white `}
                      >
                        {item.label}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section className="flex w-full">{children}</section>
      </section>
      </div>
    );
  }
  
  export default HomeLayout;
