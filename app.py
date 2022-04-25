# -*- coding: utf-8 -*-
'''
  @CreateTime	:  2022/04/25 15:56:39
  @Author	:  Alwin Zhang
  @Mail	:  zjfeng@homaytech.com
'''

import json
from flask import Flask, jsonify, request


app = Flask(__name__)


@app.route("/")
def index():
    return {"result": "hello world"}


@app.route("/test", methods=['GET', 'POST'])
def test():
    persons = [{"name": "zhangsan", "age": 18}, {"name": "lisi", "age": 20}]
    return {"result": persons}


@app.route("/test2", methods=["POST"])
def test2():
    content = request.data.decode('utf-8')
    datas = json.loads(content)
    persons = [{"name": "wangwu", "age": 25},
               {"name": "zhaosi", "age": 29}]
    return {"result": persons}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9800, debug=False)
