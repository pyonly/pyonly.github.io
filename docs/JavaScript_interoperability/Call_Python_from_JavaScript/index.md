# Call Python-functions from JavaScript
A Python-function can be called in the following way:
```javascript
Python.call('function_name', argument_1, argument_2, ...);
```
* The first argument of the ```Python.call-method``` has to be the name of the Python-function.
* Subsequently, the arguments follow the order of the parameters of the Python-function.
Here is a simple example:
<example-box path="docs/JavaScript_interoperability/Call_Python_from_JavaScript/examples/call_python" file="index.html"></example-box>
<example-box path="docs/JavaScript_interoperability/Call_Python_from_JavaScript/examples/call_python" file="example.py"></example-box>
When the button is clicked, the function ``fibonacci`` is called in Python. This calculates the Fibonacci sequence up to n and changes the HTML code of the element 'output' to the result of the Fibonacci sequence.

# Call a Python-function with Return Value
In order to get a return value we have to create an asynchronous function/need a Promise.

A Python-function returning a value can be called in the following way:
```javascript
var return_value = await Python.call_async('function_name', argument_1, argument_2, ...);
```
* The first argument of the Python.call-method has to be the name of the Python-function.
* Subsequently, the arguments follow the order of the parameters of the Python-function.
Here is a simple example:
<example-box path="docs/JavaScript_interoperability/Call_Python_from_JavaScript/examples/call_python_async" file="index.html"></example-box>
<example-box path="docs/JavaScript_interoperability/Call_Python_from_JavaScript/examples/call_python_async" file="example.py"></example-box>
When the button is clicked, the function ``fibonacci`` is called in Python. This calculates the Fibonacci sequence up to n and returns the result.
