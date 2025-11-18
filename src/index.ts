import { PrismaClient } from '@prisma/client';

const prisma= new PrismaClient();

async function main(){
  const category= await prisma.category.create({
    data:{
      name: "Electronics"
    }
  })
  console.log("Created category: ", category);
}

main()
.catch((e)=>console.error("Error: ", e))
.finally(async()=>{
    await prisma.$disconnect();
});