import { SiteLogo } from "@/components/svg";
export default {
  logo: (
    <span className=" inline-flex gap-2.5 items-center">
      <SiteLogo className="w-8 h-8 text-primary" />{" "}
      <span className="  text-lg font-bold text-primary ">DashTail</span>
    </span>
  ),
  project: {
    link: "https://github.com/shuding/nextra",
  },
  banner: {
    key: "1.0-release",
    text: (
      <a href="/dashboard" target="_blank">
        🎉 DashTail
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://codeshaper.net/" target="_blank">
          CodeShaper
        </a>
        .
      </span>
    ),
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
      };
    },
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – DashTail",
    };
  },
};
