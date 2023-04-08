import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "./utils/buid-route-path.js";

export const routes = [
    {
        method: "GET",
        path: buildRoutePath("/users"),
        handler: (req, res) => {
            const users = database.select("users");

            return res.writeHead(200).end(JSON.stringify(users));
        }
    },
    {
        method: "POST",
        path: buildRoutePath("/users"),
        handler: (req, res) => {
            const { name, email } = req.body;

            const user = {
                id: randomUUID(),
                name,
                email
            };
    
            database.insert("users", user);
    
            return res.writeHead(201).end();
        }
    },
    {
        method: "DELETE",
        path: buildRoutePath("/users/:id"),
        handler: (req, res) => {

        }
    }
]