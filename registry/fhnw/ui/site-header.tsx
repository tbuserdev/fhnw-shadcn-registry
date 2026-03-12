import { Badge } from "@/registry/fhnw/ui/badge";
import { buttonVariants } from "@/registry/fhnw/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#install", label: "Installation" },
  { href: "/#previews", label: "Vorschau" },
  { href: "/docs", label: "Komponenten" },
  { href: "/r/registry.json", label: "Registry JSON" },
];

function joinRegistryPath(basePath: string | undefined, path: string) {
  if (!basePath || basePath === "/") {
    return path;
  }

  return `${basePath.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

function SiteHeader({ registryBasePath }: { registryBasePath?: string }) {
  return (
    <header className="border-2 border-black bg-white">
      <div className="flex flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-black px-3 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            FHNW
          </span>
          <Badge variant="secondary">Base UI Registry</Badge>
          <span className="text-sm text-foreground/70">
            Light-Theme Primitives für Vite und shadcn.
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={
                link.href.startsWith("/r/")
                  ? joinRegistryPath(registryBasePath, link.href)
                  : link.href
              }
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "no-underline",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href={joinRegistryPath(registryBasePath, "/r/style-fhnw.json")}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "no-underline",
            )}
          >
            Theme JSON
          </a>
        </nav>
      </div>
    </header>
  );
}

export { SiteHeader };
