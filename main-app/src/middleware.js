import { withAuth } from "next-auth/middleware";
const middleware = async (request) => {};
export default withAuth(middleware);
export const config = {
  matcher: ["/dashboard/:path*"],
};
