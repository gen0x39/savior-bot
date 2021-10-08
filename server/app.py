#coding: utf-8
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    salvations = []
    with open('salvation.csv',encoding='utf-8') as f:
        salvations = f.readlines()
    ##return render_template('index.html',salvations=salvations)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)