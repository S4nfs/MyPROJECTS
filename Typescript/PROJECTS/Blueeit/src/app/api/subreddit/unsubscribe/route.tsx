import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { SubredditSubscriptionValidator } from '@/lib/validators/subreddit'
import { z } from 'zod'

export async function POST(req: Request) {
  try {
    const session = await getAuthSession()
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
    if (!subscriptionExists) {
      return new Response('Not subscribed to this community', { status: 400 })
    }

    //check if the user is the cerator of the subreddit
    const subreddit = await db.subreddit.findFirst({
      where: {
        id: subredditId,
        creatorId: session.user.id,
      },
    })
    if (subreddit) {
      return new Response('You cannot subscribe to your own community', { status: 400 })
    }
    await db.subscription.delete({
      where: {
        userId_subredditId: {
          subredditId,
          userId: session.user.id,
        },
      },
    })
    return new Response(subredditId)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid data', { status: 422 })
    } //422 invalid data
    return new Response('Something went wrong while unsubscribing community', { status: 500 })
  }
}
