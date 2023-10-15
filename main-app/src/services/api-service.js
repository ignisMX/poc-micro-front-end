import request from "./api";
export const findAllItemsAsPage = async () => {
  const endpoint = process.env.NEXT_PUBLIC_ITEMS_SUGGESTIONS_AS_PAGE;
  const response = await request.apiGet(endpoint);
  return response;
};
