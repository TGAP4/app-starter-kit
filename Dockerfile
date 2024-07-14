# Node is needed by Prisma
FROM imbios/bun-node

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run prisma generate

RUN bun run migrate

RUN bun run build

CMD bun start
