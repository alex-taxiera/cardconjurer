# Card Conjurer
Card Conjurer was created by a passionate Magic the Gathering player and grew to become probably the most popular online card generator known to the game.
In November of 2022, Wizards of the Coast served the original creator and webhost of the site with Ceas and Desist paperwork, forcing the site offline.
This repository is for the purpose of making the application usable on your local machine and maintaining templates in perpetuity.
## Setup
- Clone this repo somewhere on your system. (Or download the Zip with CODE > Download Zip above)
- Run server.exe (or mac-server for MacOS, linux-server for linux)
- You're good to go! You could also set up Card Conjurer in a more traditional method using WAMP, Docker, XAMPP, etc.


[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?longCache=true&style=popout)](https://www.paypal.me/kyleburtondonate
) ← Help out Card Conjurer's original creator, Kyle. We love you buddy.


## Start with Docker (http://localhost:4242/)

<details>
  <summary>Install Make on Ubuntu</summary>

  ```bash
  $ sudo apt update
  ```

  check is make installed

  ```bash
  $ make -version
  ```

  after run this command, you got the following error? 
  
  - **bash: /usr/bin/make: No such file or directory**

  then follow with the next step, otherwise skip the next commands

  ```bash
  $ sudo apt install make
  ```

### Troubleshooting's? 
 * Follow this guide https://linuxhint.com/install-make-ubuntu/
</details>

<details>
  <summary>Install Make on Mac</summary>

  check is make installed

  ```bash
  $ make -version
  ```

  after run this command, you got the following error? 
  
  - **zsh: command not found: make**

  then follow with the next step, otherwise skip the next commands

  ```bash
  $ (sudo) brew install make
  ```
</details>

<details>
  <summary>Install Make on Windows</summary>

  Follow this Guide
  https://sp21.datastructur.es/materials/guides/make-install.html#windows-installation
</details>

* go to the downloaded/ cloned folder with your terminal/ powershell (windows) and run the following command

```bash
$ make start
```

Open your Browser with the following URL 

http://localhost:4242/

### Important

Be sure, that you are running Docker Desktop under Windows or Mac before you can run the make command.

## Using Local Images

If you're saving a lot of cards custom images you might hit the data limit for uploaded images (about 2MB).

You can avoid this by putting the image files in the `local_art` directory of this repo. Then, when selecting the image in the Art tab of the card creator, instead of uploading the image you can type the file name in the "Via URL" field. This will use the image directly from the `local_art` directory instead of needing to store the whole image in the save file.

For example if you add the file:
`cardconjurer/local_art/my_art.jpg`

You can load it in the "Via URL" box by typing:
`my_art.jpg`
then hitting enter.

## Local Development
This project uses [ESLint](https://eslint.org) for ensuring consistent code styles. The style will be enforced on each PR. To ensure your code meets the standards, make sure to run ESLint on your code. If you are using VSCode it will run every time you save a file.

### Setting up ESLint
The main thing required here is Node, you can install it anyway you choose, but this project is setup for easy Node installation via NVM. Follow the NVM [install instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating), and then run `nvm install` in the repository to install Node.

Once Node is installed, you will need to install ESLint and other dependencies via `npm install`.

Once the dependencies are installed you will be able to run eslint, either via VSCode auto formatting, or by one of the commands: `npm run lint` or `npm run lint:fix`. The latter command will fix any issues it can.
