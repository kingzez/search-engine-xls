build:
	@echo "building nuxt"
	@yarn build
	@make docker

docker:
	@echo "building docker image"
	@docker build -t ccr.ccs.tencentyun.com/nuxt/search-engine-xls:1.1.1 .

push:
	@docker push ccr.ccs.tencentyun.com/nuxt/search-engine-xls:1.1.1
