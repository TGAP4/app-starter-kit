FROM oven/bun AS builder

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./
RUN bun install
COPY . .

RUN bun run build


FROM oven/bun

WORKDIR /usr/src/app

COPY --from=builder /dist ./

ENV NODE_ENV production

CMD bun start