FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

RUN bunx prisma generate

RUN bun run build

RUN ls -la /usr/src/app/node_modules/.prisma/client/


CMD bun start