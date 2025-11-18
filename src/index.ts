import { PrismaClient } from '@prisma/client';

const prisma= new PrismaClient();

async function main(){
  const user = await prisma.user.findMany()
  console.log("All users: ", user)
}

main()
.catch((e)=>console.error("Error: ", e))
.finally(async()=>{
    await prisma.$disconnect();
});