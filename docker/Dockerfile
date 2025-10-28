# === Build ===
FROM node:20-bookworm-slim AS build
WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
#nextjs 빌드시 dev 디펜던시도 포함시킴 -> 빌드시 필요도구가 포함안되 오류발생 가능성 있음
RUN npm ci --include=dev

COPY . .
RUN npm run build

FROM node:20-bookworm-slim AS run
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

RUN useradd -m nextjs #계정 추가
USER nextjs

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]