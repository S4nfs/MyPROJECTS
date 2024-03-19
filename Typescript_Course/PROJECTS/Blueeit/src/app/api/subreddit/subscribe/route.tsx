import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { SubredditSubscriptionValidator } from '@/lib/validators/subreddit'
import { z } from 'zod'

export async function POST(req: Request) {
  try {
    const session = getAuthSession()
    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }
    const body = await req.json()
    const { subredditId } = SubredditSubscriptionValidator.parse(body)
    const subscriptionExists = await db.subscription.findFirst({
      where: {
        subredditId,
        userId: session.user.id,
      },
    })
    if (subscriptionExists) {
      return new Response('Already subscribed', { status: 400 })
    }
    await db.subscription.create({
      data: {
        userId: session.user.id,
        subredditId,
      },
    })
    return new Response(subredditId)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid data', { status: 422 })
    } //422 invalid data
    return new Response('Something went wrong while subscribing community', { status: 500 })
  }
}
