import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team & Advisors | ESG Advocacy" },
      {
        name: "description",
        content:
          "The leadership, core team, advisors and research group behind ESG Advocacy's AI-first ESG intelligence platform.",
      },
      { property: "og:title", content: "Team — ESG Advocacy" },
      { property: "og:description", content: "Leadership, advisors and the research and intelligence group." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/about", hash: "team" });
  },
  component: () => null,
});
