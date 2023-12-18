import { Elysia, t } from "elysia";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()

const app = new Elysia()
  .post(
    '/sign-up',
    async ({body}) => db.user.create({
      data: body
    }), 
    {
      body: t.Object({
        username: t.String(),
        password: t.String({
          minLength: 8
        })
      })
    }
  ).listen(3000)

  console.log(`🦊Server runing at ${app.server?.hostname}:${app.server?.port}`)