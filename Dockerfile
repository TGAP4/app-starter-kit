FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./

RUN bun install

COPY prisma ./prisma/
RUN bun run prisma generate && ls -la node_modules/.prisma/client

COPY . .

RUN bun run build && ls -la dist


# RUN ls -la /usr/src/app/node_modules/.prisma/client/


CMD bun start