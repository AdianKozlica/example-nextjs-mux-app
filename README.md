This is an example app that uses Mux and Next js

```sh
  pnpm run dev # Run server
  ngrok http 3000 # Expose port 3000 to the internet using ngrok  
```
Ngrok download link: https://ngrok.com/download

In order to use webhooks you need to follow instructions from the following url:

https://docs.mux.com/guides/system/listen-for-webhooks

Example webhook endpoint:
```
  https://<your-webhook-url>/api/mux/webhook
```

Env file example (if i am not wrong you need to create the database first in mysql):

```
MUX_TOKEN_ID=<YOUR TOKEN ID>
MUX_TOKEN_SECRET=<YOUR TOKEN SECRET>

DATABASE_URL="mysql://root@localhost:3306/videos"  - URL without password
DATABASE_URL="mysql://root:123456@localhost:3306/videos"  - URL with password

```

Information regarding uploading videos to Mux:

https://docs.mux.com/guides/video/upload-files-directly
