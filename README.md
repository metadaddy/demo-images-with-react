# 🖼️ Images With React

A simple image sharing app built with Appwrite and React, demonstrating Appwrite Storage and Permissions.

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
  * Scroll down the Settings page, and click **Add Role**. 
  * In the **Role** dropdown, select `users`, and enable the **Create** permission.
  * Enable **File Security**.
  * Click **Update** to update the bucket's settings.



* **Attributes**
* 
Add the following attributes to the collection. 
> Make sure that your Attribute ID exactly matches the key in the images

<p align="center">
  <img width="744" alt="Content Attribute" src="https://user-images.githubusercontent.com/29069505/155617343-6ff674b3-9809-42ac-8175-0f76271b1189.png">
</p>

<p align="center">
  <img width="744" alt="IsComplete Attribute" src="https://user-images.githubusercontent.com/29069505/155617393-f30270af-aa07-4392-a7b2-75b8ce9c60da.png">
</p>

* **Permissions**

Add the following permissions to your collections. These permissions ensure that only registered users can access the collection.

<p align="center">
<img src="https://user-images.githubusercontent.com/20852629/113019801-99bc1580-919f-11eb-9a94-13b1529cb925.png" alt="Collection Permissions" width="400"/>
</p>

### 🚀 Deploy the Front End
You have two options to deploy the front-end and we will cover both of them here. In either case, you will need to fill in these environment variables that help your frontend connect to Appwrite.

* REACT_APP_ENDPOINT - Your Appwrite endpoint
* REACT_APP_PROJECT - Your Appwrite project ID
* REACT_APP_COLLECTION_ID - Your Appwrite collection ID 

### **Deploy to a Static Hosting Provider**

Use the following buttons to deploy to your favourite hosting provider in one click! We support Vercel, Netlify and DigitalOcean. You will need to enter the environment variables above when prompted.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fappwrite%2Ftodo-with-react&env=REACT_APP_COLLECTION_ID,REACT_APP_PROJECT,REACT_APP_ENDPOINT&envDescription=Your%20Appwrite%20Endpoint%2C%20Project%20ID%20and%20Collection%20ID%20)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/appwrite/demo-todo-with-react)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/appwrite/todo-with-react)

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/appwrite/todo-with-react/tree/main)


### **Run locally**

Follow these instructions to run the demo app locally

```sh
$ git clone https://github.com/appwrite/todo-with-react
$ cd todo-with-react
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

If you get stuck anywhere, hop onto one of our [support channels in discord](https://appwrite.io/discord) and we'd be delighted to help you out 🤝

## 😧 Help Wanted 
Our access credentials were recently compromised and someone tried to ruin these demos. They decided to leave behind 15 easter eggs 🥚 for you to discover. If you find them, submit a PR cleaning up that section of the code (One PR per person across all the repos). You can track the number of claimed Easter Eggs using the badge at the top.

The first 15 people to get their PRs merged will receive some Appwrite Swags 🤩 . Just head over to our [Discord channel](https://appwrite.io/discord) and share your PR link with us.  

> *UPDATE **17-11-2021**:* The easter egg contest is now closed. 
