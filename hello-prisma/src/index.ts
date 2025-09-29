import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here
    // console.log('Hello Prisma. ' + new Date().toISOString());
    // Add data to the database
    //   const result = await prisma.user.create({
    //       data: {
    //           email: 'saiful@prisma.io',
    //           name: 'Saiful Islam',
    //           profilePhoto: 'https://avatars.githubusercontent.com/u/1689771?v=4',
    //       },
    //   });
    // console.log(result);
    // Fetch all users from the database
    // const allUsers = await prisma.user.findMany({
    //     // where: {
    //     //     name: 'Saiful Islam',
    //     // },
    //     // orderBy: {
    //     //     name: 'desc',
    //     // },
    // });
    // console.log(allUsers);
    // Fetch a single user by their unique ID
    // const singleUser = await prisma.user.findUnique({
    //     where: {
    //         id: 1,
    //     },
    // });
    // console.log(singleUser);
    // // Fetch data not existing show error
    // const nonExistentUser = await prisma.user.findUniqueOrThrow({
    //     where: {
    //         id: 9999,
    //     },
    // });
    // console.log(nonExistentUser);
    //
    // const findFirstUser = await prisma.user.findFirst({
    //     where: {
    //         name: 'Saiful Islam',
    //     },
    // });
    // console.log(findFirstUser);
    // Update a user's information
    // const updatedUser = await prisma.user.update({
    //     where: { id: 2 },
    //     data: {
    //         name: 'Nayma Islam',
    //         email: 'nayma@gmail.com',
    //     },
    // });
    // console.log(updatedUser);
    // // update many users
    // const updateManyUsers = await prisma.user.updateManyAndReturn({
    //     where: {
    //         id: 3,
    //     },
    //     data: {
    //         name: 'Saiful Islam Saif',
    //     },
    // });
    // console.log(updateManyUsers);
    // // delete a user by their unique ID
    // const deletedUser = await prisma.user.delete({
    //     where: { id: 1 },
    // });
    // console.log(deletedUser);

    // delete many users
    const deleteManyUsers = await prisma.user.deleteMany({
        where: {
            id: {
                lt: 3,
            },
        },
    });
    console.log(deleteManyUsers);

    // last point
}

main();
