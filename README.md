# Steps for Dockerizing the application

1. Install Docker using https://docs.docker.com/desktop/mac/install/

2. To verify installation
   $ docker --version

3. $ docker ps ## Docker works fine if no error returns

4. Create Dockerfile. 

FROM Keyword, tells the docker which image to use as your base image. 
WORKDIR, tells docker the working directory of our image. 
CMD or RUN commands execute in this folder
COPY stands for copy; We copy package.json file to workdir
RUN executes a command on the working directory that’s defined above. 
The npm install command installs required dependencies defined in the package.json, which we’ve just copied to /app directory
EXPOSE 3000, here it informs the user container (using this image) that it needs to open port 3000.

5. Building docker image 
    $ docker build -t node-app .

The Docker build command is used to create an image with instructions given by Docker-file. -t flag is used to tag the images with our node-app name. 

5. Create and Run The Container

$ docker run -d --name demoapp -p 3000:3000 node-app

Here we run a container using our NodeJS image. The run command used to run container -d flag indicates container will be running on detach mode. — name is optional. You can give any name to your container. -p flag is used to define the port on which our server is running, the first port is the container port, and the second one is the host port. Next, we have to specify which image is used to run the container, and that it’s our nnode-app image. 

You can curl 127.0.0.1:3000 or browse this address to test that it’s running.

6. Upload the image to docker registry 

$ docker tag node-app santhosh6prasad/hello-world

$ docker push santhosh6prasad/hello-world:nodekube
best practice is to provide version no's like 1.1






