FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./

RUN bun install

# COPY prisma ./prisma/

RUN bun run prisma generate

COPY . .


RUN bun run build

RUN bun start

# CMD bun start