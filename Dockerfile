FROM node:12-buster-slim
# RUN cat /etc/apt/sources.list
COPY ./sources.list /etc/apt/sources.list
RUN apt-get update && apt-get install -y nginx
# http-server 不变动也可以利用缓存
WORKDIR /code

RUN yarn config set registry https://registry.npm.taobao.org/
COPY package.json /code
RUN yarn install

COPY . /code

RUN npm run build && cp -r dist/* /usr/share/nginx/html && rm /etc/nginx/sites-enabled/default && cp nginx/nginx.conf /etc/nginx/nginx.conf && cp nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf && rm -rf /code
CMD ["nginx","-g","daemon off;"]

# CMD ["npm", "run", "build"]

# 选择更小体积的基础镜像
#FROM nginx:alpine
#COPY --from=builder /code/build /usr/share/nginx/html
#COPY /code/nginx/nginx.conf /etc/nginx/nginx.conf
#COPY /code/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80