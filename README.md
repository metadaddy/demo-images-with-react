# 🖼️ Images With React

A simple image sharing app built with Appwrite and React, demonstrating Appwrite Storage and Permissions.

<img width="466" alt="image" src="https://user-images.githubusercontent.com/723517/195679601-9dbfc7e5-37d8-4144-84e6-a103ad85979f.png">

## 🎬 Getting Started

### 🤘 Install Appwrite 
Follow our simple [Installation Guide](https://appwrite.io/docs/installation) to get Appwrite up and running in no time. You can either deploy Appwrite on your local machine or, on any cloud provider of your choice. 

> Note: If you setup Appwrite on your local machine, you will need to create a public IP so that your hosted frontend can access it.
  
We need to make a few configuration changes to your Appwrite server. 

1. (Optional) Configure a Storage in Appwrite

    Although you can deploy the app with the default Local storage, this app is intended to allow you to experiment with other Appwrite Storage adapters. For example, you could [configure Backblaze B2 Cloud Storage to store files in the cloud](https://medium.com/appwrite-io/appwrite-storage-meets-backblaze-b2-c0b3a9d303f3).
    
    If you do configure a Storage, remember to restart Appwrite after editing your .env file. This can be easily done by running the following command.
    
    ```bash
    docker-compose up -d
    ```
2. Create a new project in the Appwrite console.

3. Add a new Web App to the project and enter your website's endpoint (`localhost, <project-name>.vercel.app etc`)

    ![Create Web App](https://user-images.githubusercontent.com/20852629/113019434-3c27c900-919f-11eb-997c-1da5a8303ceb.png)
    
4. Click **Storage** in the left navigation menu to create a new bucket.
  * Give the bucket a suitable name, for example, `user-images`, and click **Create**.
  * Make a note of the **Bucket ID** on the right of the Settings page.
  * Scroll down the Settings page, and click **Add Role**. 
  * In the **Role** dropdown, select `users`, and enable the **Create** permission.
  * Enable **File Security**.
  * Click **Update** to update the bucket's settings.

    <img width="642" alt="Bucket Settings" src="https://user-images.githubusercontent.com/723517/195677596-f52fd8d0-c94c-4670-9bfb-46565e9b899f.png">

### 🚀 Deploy the Front End

You have two options to deploy the front-end and we will cover both of them here. In either case, you will need to fill in these environment variables that help your frontend connect to Appwrite.

* `REACT_APP_ENDPOINT` - Your Appwrite endpoint
* `REACT_APP_PROJECT` - Your Appwrite project ID
* `REACT_APP_BUCKET_ID` - The Appwrite bucket ID you noted in the previous step

### **Deploy to a Static Hosting Provider**

Use the following buttons to deploy to your favourite hosting provider in one click! We support Vercel, Netlify and DigitalOcean. You will need to enter the environment variables above when prompted.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmetadaddy%2Fdemo-images-with-react&env=REACT_APP_BUCKET_ID,REACT_APP_PROJECT,REACT_APP_ENDPOINT&envDescription=Your%20Appwrite%20Endpoint%2C%20Project%20ID%20and%20Bucket%20ID%20)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/metadaddy/demo-images-with-react)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/metadaddy/demo-images-with-react)

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/metadaddy/demo-images-with-react/tree/main)


### **Run locally**

Follow these instructions to run the demo app locally

```sh
$ git clone https://github.com/metadaddy/demo-images-with-react
$ cd demo-images-with-react
```

Run the following command to generate your `.env` vars

```sh
$ cp .env.example .env
```

Now fill in the envrionment variables we discussed above in your `.env`

Now run the following commands and you should be good to go 💪🏼

```
$ npm install
$ npm start
```

## 🤕 Support

If you get stuck anywhere, file an issue and I'll take a look 🤝
