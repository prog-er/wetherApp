# Используйте официальный образ Node.js 18 как базовый образ
FROM node:18

# Создайте рабочую директорию
WORKDIR /usr/src/app

# Скопируйте package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте исходный код
COPY . .

# Соберите приложение
RUN npm run build

# Укажите порт для приложения
EXPOSE 3000

# Команда для запуска приложения в продакшн режиме
CMD [ "node", "./.output/server/index.mjs" ]
