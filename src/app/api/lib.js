import { FetchRequests, CardRequests } from "./api";

export const CardRequestsImpl = new CardRequests(new FetchRequests())