import { PrismaClient } from '@prisma/client';

const prisma= new PrismaClient();

async function main(){
  const deletedUser = await prisma.user.delete({
    where:{id: '7ef03a9e-1ecf-470a-8d37-49cb65a44ed3'}
  })
  console.log("User deleted successfully: ", deletedUser )
}

main()
.catch((e)=>console.error("Error: ", e))
.finally(async()=>{
    await prisma.$disconnect();
});