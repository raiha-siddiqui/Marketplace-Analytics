import { PrismaClient } from '@prisma/client';

const prisma= new PrismaClient();

async function main(){
  const updatedUser= await prisma.user.update({
    where:{id: '7ef03a9e-1ecf-470a-8d37-49cb65a44ed3'},
    data: {name: "Raiha Siddiqui"},
  })
  console.log("User Updated successfully: ", updatedUser )
}

main()
.catch((e)=>console.error("Error: ", e))
.finally(async()=>{
    await prisma.$disconnect();
});