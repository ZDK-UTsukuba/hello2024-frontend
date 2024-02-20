import { FetchRequests, CardRequests } from "./api";
import { testRequests } from "./test";
export const CardRequestsImpl = new CardRequests(new FetchRequests())
export const testRequestsImpl = new testRequests()