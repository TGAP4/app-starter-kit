FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./
RUN bun install
COPY . .

RUN bun run build
# COPY dist ./

# ENV NODE_ENV production

CMD bun start