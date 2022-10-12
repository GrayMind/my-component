```
pnpm i
```

```
pnpm run build:all
```

```
# 确认版本
pnpm changeset
# 修改各个 package 中的 package.json 和 CHANGELOG.md 
pnpm run version
# 提交代码
git add . && git commit -m 'xxxx'
# 发布
pnpm run release
```


```
pnpm adduser --registry http://localhost:4873/
pnpm login  --registry http://localhost:4873/
```