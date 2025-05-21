import beepboop
from flask import Flask

app = beepboop.create_app('config.py')

@app.route("/")
def hello():
    return "hello world!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
