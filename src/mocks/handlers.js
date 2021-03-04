import { rest } from "msw";
import FilterDetails from './FilterDetails'
import ToolDetails from "./ToolDetails";

export const handlers = [ 
rest.get("https://api.github.com/users/hacktivist123/repos",
(req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(FilterDetails)
    );
}
),
rest.get("https://api.github.com/users/hacktivist123/MARCUS",
(req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(ToolDetails)
    );
}
)
];