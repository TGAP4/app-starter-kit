FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./
RUN bun install

RUN npx prisma generate

COPY . .

RUN bun run build

CMD bun start