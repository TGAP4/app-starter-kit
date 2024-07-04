FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./

RUN bun install

RUN bun add -g prisma

# COPY prisma ./prisma/

RUN bun run prisma generate

COPY . .

RUN bun run prisma generate

RUN bun run build

CMD bun start