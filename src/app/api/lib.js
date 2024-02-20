import { FetchRequests, CardRequests, testRequests } from "./api";

export const CardRequestsImpl = new CardRequests(new FetchRequests())
export const testRequestsImpl = new testRequests()