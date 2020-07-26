# First Steps
Let's create a simple "Hello World" example app:

## 1. Python code
First, we have to create a python file, which we call "example.py" in this tutorial. This file contains the following content:
<example-box path="docs/First_Steps/HelloWorld" file="example.py"></example-box>

At the beginning of the file, imports of PyOnly and Tornado are necessary. The variable port defines the port to listen on. It is passed as an argument to the webapp.listen method. Besides, it is used together with the variable host in order to render the index.html file. 

Furthermore, we created the class App to interact with the user interface. This class has to include the __init__() function with a window parameter to assign it to an object property (self.window). Note that the name self.window must be used and no other! The command self.w.document.getElementById("output").innerHTML = "Hello World!" changes the HTML content of the element 'output' (in the index.html file). You will learn more about this later.

The class Index (view) inherits from the RequestHandler object found in tornado.web to handle a GET request and to render the index.html file with multiple variables (host, port, path). As it stands, this view has no actual connection to the Tornado application itself.

Therefore, we must add our route-view pairs (Index class-based view) as the first argument to the instantiation to Application (tornado.web.Application). Our created class App must be passed to the handler.Handler method. The defined path ('ws') must match the argument path in the Index-class. 

After calling to listen on Tornado's webapp, we need an input-output loop. Tornado comes with that in the form of tornado.ioloop.IOLoop.

## 2. HTML-Code
Now we can create the index.html file with the following simple HTML-Code:
<example-box path="docs/First_Steps/HelloWorld" file="index.html"></example-box>
The python.js file can to be added in two ways. One option is to include it from the following CDN:
```
<script src="http://pyonly.com/resources/javascript/python/versions/1-0/python.js"></script>
```
Alternatively, you [can download the file here](https://pyonly.000webhostapp.com/resources/js/Python/1/python_js-Download-version-1.zip). After extracting it, you can add it to the <head> section (as <script src="python.js"></script> or when using a subfolder as <script src="js/python.js"></script>).

Between <script> and </script> tags we need this JavaScript code (Python.init("{{ host }}", "{{ port }}", "{{ path }}");) to initialize a connection to Python. The arguments (like {{ host }}) of the init method are replaced by the values defined in the Index class (view) in our Python code. 

Furthermore, we use a paragraph (with id="output") in order to change the element content with Python to "Hello World!". 

### 3. Run python file
Open your command line, navigate to the directory where you saved your python file, and run: python example.py. Then you can open your browser and load http://localhost:8888/.
