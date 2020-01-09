from flask import Flask, abort, render_template, send_file
import os
import glob

app= Flask(__name__)


pre_path= ""

@app.route('/', defaults={'req_path': ''})
@app.route('/<path:req_path>')
def dir_listing(req_path):
    BASE_DIR = 'C:/Users/10650637/Music/'

    global pre_path
    req_path= os.path.join(pre_path, req_path)
    pre_path= req_path
    print("PRE: "+pre_path)

    # Joining the base and the requested path
    abs_path = os.path.join(BASE_DIR, req_path)

    # Return 404 if path doesn't exist
    if not os.path.exists(abs_path):
        return abort(404)

    # Check if path is a file and serve
    if os.path.isfile(abs_path):
        return send_file(abs_path)

    # Show directory contents
    files = os.listdir(abs_path)

    abs_path= os.path.join(abs_path, "*")
    files= glob.glob(abs_path)
    ff= []
    for file in files:
        ff.append(os.path.relpath(file))
    return render_template('files.html', files=ff)


if __name__ == "__main__":
    app.run()