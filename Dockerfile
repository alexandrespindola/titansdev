# Etapa de build
FROM node:22.2.0-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

# Instala as dependências e limpa o cache do Yarn
RUN yarn install && yarn cache clean

COPY . .

RUN yarn build

# Etapa de produção
FROM node:22.2.0-alpine

WORKDIR /usr/src/app

# Copia apenas os arquivos necessários da etapa de build
COPY --from=builder /usr/src/app/.output ./.output

EXPOSE 3000

CMD ["yarn", "preview"]