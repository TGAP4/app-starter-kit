# Stage 1: Build
FROM oven/bun as builder

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run prisma generate
RUN bun run build

# Stage 2: Production
FROM oven/bun

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app /usr/src/app

CMD ["bun", "start"]


# COPY prisma ./prisma

# COPY prisma ./prisma/

# RUN bun run prisma generate
# RUN bun run prisma migrate deploy
