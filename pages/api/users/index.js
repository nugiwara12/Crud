// import { Prisma, prisma } from "@/app/config/db";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getUser(req, res);

        case "POST":
            return await addUser(req, res);
    }
}

const getUser = async (req, res) => {
    try {
        const result = await prisma.user.findMany();
        // Transform array of objects to an object where keys are IDs
        // const users = result.reduce((acc, user) => {
        //     acc[user.id] = user;
        //     return acc;
        // }, {});
        return res.status(200).json({ users: result });
    } catch (error) {
        return res.status(500).json(error);
    }
}

const addUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const data = {
            username: username,
            email: email
        };
        const result = await prisma.user.create({
            data: data,
            select: {
                id: true,
                username: true,
                email: true
            }
        });
        return res.status(200).json({ user: result }); // Return added user as an object
    } catch (error) {
        return res.status(500).json(error);
    }
}
