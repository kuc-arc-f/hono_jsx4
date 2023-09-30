# hono_jsx4

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/09/28 

 update  : 2023/09/30

***
### Summary

hono + cloudflare workers + D1,  SSR sample

***
### wrangler.toml, setting

* db setting, sample
```
name = "hono_jsx3"
main = "src/index.ts"
compatibility_date = "2023-09-01"
node_compat = true

[site]
bucket = "./public"

[vars]
#API_KEY = "123"

[[d1_databases]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = "db123"
database_id = ""


```
***
### blog 

***

