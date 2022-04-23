// ui ---(3api)---> backend

// 1st - update backend


//     4api    <----   10api
// ui ---> graphql ---> backend
//         resolver

// graphql is like a wrapper to backend

// graphql:
// 1. resolver
// 2. graphql server
import * as koa from "koa";
import { buildSchema } from "type-graphql";
import hotelsResolver from "./hotelResolver";
import { ApolloServer } from "apollo-server-koa";
import * as Router from "koa-router";
import {graphqlHTTP} from "koa-graphql";
import "./createConnection.ts";
import * as cors from "@koa/cors";

async function main() {
    const app = new koa();
    const resolvers = await buildSchema({ resolvers: [hotelsResolver] });
    const apolloServer = new ApolloServer({ schema: resolvers });
    const router = new Router();
    router.all("/graphql", graphqlHTTP({schema: resolvers}));
    apolloServer.applyMiddleware({app});
    app.use(router.routes());
    app.use(cors());
    app.listen(process.env.PORT || 3005, () => console.log("graphql is working"))
}

main();