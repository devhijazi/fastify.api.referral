import { redis } from '../redis/client'

type AcessInviteLinkParams = {
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId,
}: AcessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
