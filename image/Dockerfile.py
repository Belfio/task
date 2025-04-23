# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the requirements file into the container at /usr/src/app
COPY requirements.txt ./

# Install any needed packages specified in requirements.txt
# Even if empty, it's good practice to run this
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /usr/src/app
COPY index.py ./

# Run index.py when the container launches
# Use -u for unbuffered output, similar to Node.js console.log behavior
CMD ["python", " -u ", "index.py"] 