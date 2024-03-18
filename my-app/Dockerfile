# Stage 1: Build the React app
FROM node:16-alpine as react-build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Build the LaTeX file
# FROM docker.io/debian:bullseye AS latex-build

# RUN apt-get update \
#     && apt-get install -y --no-install-recommends \
#        texlive-latex-extra \
#     && rm -rf /var/lib/apt/lists/*

# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy LaTeX files into the container
# COPY latex ./

# # Compile the LaTeX file into a PDF
# RUN pdflatex --interaction=nonstopmode main.tex

# Stage 3: Combine both stages into a final image
FROM nginxinc/nginx-unprivileged:stable-alpine

# Remove the user directive from the nginx configuration
RUN sed -i '/^user/d' /etc/nginx/nginx.conf

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the built React app from the react-build stage
COPY --from=react-build /app/build ./ 

# Copy the PDF file from the latex-build stage to the public directory
#COPY --from=latex-build /usr/src/app/main.pdf ./public/resume.pdf
