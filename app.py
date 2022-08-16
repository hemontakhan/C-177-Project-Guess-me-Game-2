from crypt import methods
from re import template
from flask import Flask,render_template,jsonify,request

app = Flask(__name__)

templates=[
  {
    "inputs": 3,
    "category": "science",
    "hint": "Smallest mamal that can fly",
    "word":"Bat"
  },
  {
    "inputs": 6,
    "category": 'European Country',
    "hint": 'Napoleon was the ruler of this country',
    'word': "France"
  },
 {
  "inputs": 6,
  "category": 'sports',
  "hint": "National sports of India",
  "word": "kabaddi"
 }
]

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/get-template')
def get_template():
  return jsonify({
    "status": "success",
    "word": random.choice(templates)
  })

@app.route('/post-template',methods=["POST"])
def post_template():
  return jsonify({
    "status": "success",
    "result": 0
  })