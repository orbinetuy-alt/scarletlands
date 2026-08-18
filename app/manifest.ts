import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#001020",
    theme_color: "#001020",
    lang: "es",
    icons: [
      {
        src: "/logosca-removebg-preview.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}

