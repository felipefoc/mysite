from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', active_page='home')

@app.route('/projects')
def projects():
    return render_template('home.html', active_page='home')

app.run(debug=True)