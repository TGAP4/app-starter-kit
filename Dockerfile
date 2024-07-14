# syntax = docker/dockerfile:1.2

# Node is needed by Prisma
FROM imbios/bun-node

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run prisma generate

RUN bun run build

RUN --mount=type=secret,id=_env,dst=/etc/secrets/.env cat /etc/secrets/.env

CMD bun start
