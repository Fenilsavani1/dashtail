"use client"
import Image from "next/image";
import admin from "@/public/images/all-img/admin.png"

const WelcomeBlock = () => {
  const data = [
    {
      title: "Today's Task",
      total: "123"
    },
    {
      title: "Overdue Task",
      total: "213"
    },
  ]
  return (
    <div className="w-full h-full bg-primary rounded-md  flex p-6 relative " >
      <div className="flex-1 ">
        <div className="text-lg md:text-2xl font-semibold text-primary-foreground mb-6">
          Welcome Back <br />
          Prantik!
        </div>

        <div className=" flex flex-col gap-4 sm:flex-row ">
          {
            data.map((item, index) => (
              <div
                key={`welcome-text-${index}`}
                className="flex items-center w-full max-w-[130px] p-3 rounded bg-primary-foreground/10 shadow backdrop-blur-xs"
              >
                <div className="flex-1">
                  <div className="text-xs font-semibold text-primary-foreground/80">{item.title}</div>
                  <div className="text-lg font-semibold text-primary-foreground">{item.total}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="absolute bottom-0 ltr:right-4 rtl:left-4 md:ltr:right-[30%] md:rtl:left-[30%] md:ltr:bottom-5 2xl:ltr:right-10 2xl:rtl:left-10 w-[100px] ">
        <Image src={admin} alt="user" className="w-full h-full object-cover" />
      </div>

    </div>
  );
};

export default WelcomeBlock;