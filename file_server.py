import os
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)

@app.route('/files')
def get_files():
    path = os.path.join(os.getcwd(), 'docs')
    if not os.path.isdir(path):
        return jsonify(error='Directory not found'), 404

    files = ['/docs/'+f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)) and f.endswith('.kicad_pcb')]
    return jsonify(files=files)


@app.route('/<path:path>')
def serve_file(path):
    if os.path.isfile(path):
        return send_from_directory(os.path.dirname(path), os.path.basename(path))
    else:
        return send_from_directory(path, 'index.html')

if __name__ == '__main__':
    app.run(host='localhost', port=8080)