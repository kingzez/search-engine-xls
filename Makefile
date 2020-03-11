build:
	@echo "building nuxt"
	@yarn build
	@make docker

docker:
	@echo "building docker image"
	@docker build -t ccr.ccs.tencentyun.com/nuxt/search-from-xls:1.0.1 .

push:
	@docker push ccr.ccs.tencentyun.com/nuxt/search-from-xls:1.0.1
