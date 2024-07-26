import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  const create = await prisma.user.create({
    data: {
      email: 'glisvast@icloud.com',
      username: 'Seongjinemong',
      boards: []
    },
  })

  const allUsers = await prisma.user.findMany({
    
  })
  console.log(allUsers, { depth: null })
}


main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })