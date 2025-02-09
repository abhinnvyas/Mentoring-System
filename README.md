### Here's how to get this project up and running in your own system

You need to have Nodejs Version 16 to be specific newer versions won't work

Then run these commands -

```
git clone https://github.com/abhinnvyas/Mentoring-System.git
cd Mentoring-System
```

This contians two projects -

1. client - frontend
2. server - backend

Install all the required packages for each project -

```
cd client
npm install
```

```
cd server
npm install
```

After this start the frontend and the backend seperately in two different terminals -

```
cd client
npm run dev
```

```
cd server
npm run dev
```

Now your frontend and backend are both live.

You need to put your .env file at `server/.env`. This is an example .env file -

```
MONGO_DB_URI=your-mongodb-database-url
JWT_SECRET = jwtsecrethere
PUBLIC_URL = http://localhost:5000/
PUBLIC_APP_NAME = Student Mentoring System
CLIENT_PUBLIC_URL = http://localhost:3000
PORT = 5000
REQUEST_LIMIT_PER_MIN = 10
NODEMAILER_SERVICE = your-nodemailer-service
NODEMAILER_USER = your-nodemailer-email
NODEMAILER_PASS = your-nodemailer-pass
RESET_PASSWORD_BASE_URL = http://localhost:3000/resetPassword
NODEMAILER_SENDER_EMAIL = your-nodemailer-email
CLOUDINARY_CLOUD_NAME = your-cloudinary-email
CLOUDINARY_API_KEY = your-cloudinary-api-key
CLOUDINARY_API_SECRET = your-cloudinary-api-secret
```

And you will have everything working in your system locally.

### Deployment Details

This project is currenty live at `mentoring-system.vercel.app
`
The `Frontend` is deployed using `Vercel` and the `Backend` is deployed using `Render`
