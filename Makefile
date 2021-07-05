
opts = --allow-env --allow-net --allow-read ./src/index.ts

.PHONY: start
start:
	deno run $(opts)

.PHONY: watch
watch:
	deno run --watch $(opts)
