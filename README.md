--Steps for configure Docker and Docker composer with git.

---Installing Docker.
1- wget -qO- https://get.docker.com/ | sh

---Working with Docker is a pain if your user is not configured correctly, so add your user to the docker group with the following command.
2- sudo usermod -aG docker $(whoami)

Log out and log in from your server/local to activate your new groups.

--Installing Docker Compose
1- sudo apt-get -y install python-pip

2- sudo pip install docker-compose

That's it :)

Now, Pull code from github:-
Credentials:
username: ashuseth2050@gmail.com
password: socratz_123

Then Go to your project dir where you pulled your code.

RUN CMD:

docker-compose up

if you want run Docker compose in Background follow this step:

docker-compose up -d

Open your browser and hit- http://server_ip:3000

Have a good day!!!
