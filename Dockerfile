FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run prisma generate

ENV NODE_ENV=production
RUN bun run build

CMD bun start


# COPY prisma ./prisma

# COPY prisma ./prisma/

# RUN bun run prisma generate
# RUN bun run prisma migrate deploy
