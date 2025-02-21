import { redis } from '../redis/client'

type GetSubscriberInviteClicksParams = {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: GetSubscriberInviteClicksParams) {
  const count = await redis.hget('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
