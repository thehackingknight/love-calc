from flask import Flask, render_template, send_from_directory, request
import requests, json

app = Flask(__name__)

@app.route('/', methods = ["GET", "POST"])
def index():

    if request.method == "GET":
        return render_template('index.html')

    if request.method == "POST":
        
        names = request.get_json()

        url = "https://love-calculator.p.rapidapi.com/getPercentage"

        querystring = {"fname":names['name'],"sname":names['p_name']}

        headers = {
            'x-rapidapi-key': "18ebb2182dmsh846d3780328504ep1daf7ajsn2918fd2b9292",
            'x-rapidapi-host': "love-calculator.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        res = json.loads(response.text)
        #print(f"RESULT: {res}")
        return res

if __name__ == "__main__":
    
    app.run()