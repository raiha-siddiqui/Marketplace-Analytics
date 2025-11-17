import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

async function main(){
    console.log("`Hello, Prisma!`");
}

main()
.catch((e)=>console.error("Error: ", e))
.finally(async()=>{
    await prisma.$disconnect();
});