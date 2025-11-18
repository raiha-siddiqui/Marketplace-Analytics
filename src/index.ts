import { PrismaClient } from '@prisma/client';

const prisma= new PrismaClient();

async function main(){
    const user= await prisma.user.create({
        data: {
            name: 'Raiha',
            email: 'raiha@gmail.com',
            passwordHash: "Raiha@123"
        }
    })
    console.log("User created: ", user);
}

main()
.catch((e)=>console.error("Error: ", e))
.finally(async()=>{
    await prisma.$disconnect();
});