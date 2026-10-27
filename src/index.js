import 'dotenv/config'
import mariadb from 'mariadb'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '@prisma/client'

// 1. Convert the protocol prefix from mysql:// to mariadb:// dynamically
const connectionString = process.env.DATABASE_URL.replace(/^mysql:/, 'mariadb:')

// 2. Setup the connection pool using the converted string
const pool = mariadb.createPool(connectionString)

// 3. Instantiate the adapter and the client
const adapter = new PrismaMariaDb(pool)
const prisma = new PrismaClient({ adapter })

// async function main() {
//   const allUsers = await prisma.user.findMany()
//   console.log("Database results:", allUsers)
// }

// const main = async () => {
//     const user = await prisma.user.create({
//         data: {
//             name: 'Sagar Patil',
//             email: 'sagarpatil@google.com',
//             contact: '91234563245'
//         }
//     })
//     console.log(user);
// }

const main = async () => {
    const user = await prisma.user.update({
        where:{id:1},
        data: {
            name: 'test user',
            email: 'testuser@google.com',
            contact: '91234563245'
        }
    })
    console.log(user);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect()
        await pool.end()
    })
