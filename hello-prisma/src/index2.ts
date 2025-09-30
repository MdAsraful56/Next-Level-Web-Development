import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);

    // const someUserCreate = await prisma.user.createMany({
    //     data: [
    //         {
    //             email: 'Hello@prisma.io',
    //             name: 'Hello',
    //             profilePhoto:
    //                 'https://avatars.githubusercontent.com/u/1689771?v=4',
    //         },
    //         {
    //             email: 'Hello2@prisma.io',
    //             name: 'Hello2',
    //             profilePhoto:
    //                 'https://avatars.githubusercontent.com/u/1689771?v=4',
    //         },
    //         {
    //             email: 'Hello3@prisma.io',
    //             name: 'Hello3',
    //             profilePhoto:
    //                 'https://avatars.githubusercontent.com/u/1689771?v=4',
    //         },
    //         {
    //             email: 'Hello4@prisma.io',
    //             name: 'Hello4',
    //             profilePhoto:
    //                 'https://avatars.githubusercontent.com/u/1689771?v=4',
    //         },
    //         {
    //             email: 'Hello5@prisma.io',
    //             name: 'Hello5',
    //             profilePhoto:
    //                 'https://avatars.githubusercontent.com/u/1689771?v=4',
    //         },
    //         {
    //             email: 'Hello6@prisma.io',
    //             name: 'Hello6',
    //             profilePhoto:
    //                 'https://avatars.githubusercontent.com/u/1689771?v=4',
    //         },
    //     ],
    // });

    // console.log(someUserCreate);
}

main();
