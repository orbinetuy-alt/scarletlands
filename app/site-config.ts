const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://scarletlands.com";

export const siteConfig = {
  name: "Scarlet Lands LLC",
  shortName: "Scarlet Lands",
  url: configuredUrl.replace(/\/$/, ""),
  title: "Scarlet Lands LLC | Trading, logística y negocios B2B",
  description:
    "Conectamos proveedores, clientes y mercados mediante trading internacional, soluciones logísticas y desarrollo de negocios B2B.",
  slogan: "Conectamos mercados. Desarrollamos negocios.",
} as const;
