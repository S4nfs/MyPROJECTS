import { z } from "zod";

export const SubredditValidator = z.object({
    name: z.string().min(3).max(21),
})

export const SubredditSubscriptionValidator = z.object({
    subreditId: z.string(),
})

export type CreateSubredditPayload = z.infer<typeof SubredditValidator>
export type SubredditSubscriptionValidator = z.infer<typeof SubredditSubscriptionValidator>