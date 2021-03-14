#Install node in the container
FROM node:14

#Create the folder
RUN mkdir -p /usr/src/app

#Enter to the folder that was created
WORKDIR /usr/src/app

#Copy all package*.json in the folder
COPY package*.json ./

#To install npm modules
RUN npm install

#To install sequelize-cli
RUN npm install -g sequelize-cli

#To install nodemon
RUN npm install -g nodemon

#Copy everthing that you have in your project , you can avoid  some files with dockerignore
COPy . .

#Container port
EXPOSE 5000

#Run command
CMD ["npm","run","start-project"]

#Commands to run dockerfile : docker build -t backend .
#docker-compose build (To build the services, if you have a change you need to run again this command to refresh the image)
#docker-compose up(To run the services)