# 为html文件添加版本号或时间戳

## 添加版本号 2.5.4

### 添加版本号 2.5.4示例一

```shell
node clear-cache-service.js home.html 2.5.4
```

### 添加版本号 2.5.3示例二

```shell
node clear-cache-service.js test.html 2.5.3
```

## 添加当前系统时间戳

### 添加当前系统时间戳示例一

```shell
node clear-cache-service.js home.html
```

### 添加当前系统时间戳示例二

```shell
node clear-cache-service.js test.html
```

### 一次处理多个文件执行

```shell
node clear-cache-service.js home.html && node clear-cache-service.js home1.html
```

### 打包成 .exe 程序(打包时间较长建议晚上睡觉的时候使用)

```shell
nexe clear-cache-service.js -o clear-cache-service_x86.exe
```
