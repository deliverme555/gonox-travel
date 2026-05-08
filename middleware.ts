import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|zh|zh-TW|fr|es|it|ja|ko|pt|de)/:path*"],
};
