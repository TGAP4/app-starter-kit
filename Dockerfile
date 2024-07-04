FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./
# COPY prisma ./prisma

RUN bun install

# COPY prisma ./prisma/

# RUN bun run prisma generate

COPY . .

RUN bun run prisma generate

RUN bun run build

# RUN bun run prisma migrate deploy

CMD bun start