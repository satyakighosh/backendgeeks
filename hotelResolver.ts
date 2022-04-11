import { Resolver, Query } from "type-graphql";
import hotels_csv from "./hotels_csv";

@Resolver()
export default class hotelResolver {
    @Query(() => [hotels_csv])
    hotels() {
        return hotels_csv.find();
    }
}