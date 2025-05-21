## Setup

### Setup MySql container

## Running 

### Running on local OS

#### Setup

From project root directory:

```
virtualenv venv
pip install -r requirements.txt
. venv/bin/activate
```

#### Running

From project root directory:

`python main.py`

###  Running locally on docker

```
docker build -t beepboop_server:latest .
docker run -it -p 3000:3000 beepboop_server:latest
```

## Interacting via curl

(See checkoff_rust instructions)

