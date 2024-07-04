FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./

RUN bun install

# COPY prisma ./prisma/

COPY . .

# RUN bun run prisma generate


RUN bun run build


RUN bun run prisma generate


# CMD bun start