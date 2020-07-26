# Call JavaScript from Python
A JavaScript-function can be called in the following way:
```python
return_value = await self.window.call("function_name", argument_1, argument_2, ...)
```
* The first argument of the ``window.call``-method has to be the name of the JavaScript-function.
* Subsequently, the arguments follow the order of the parameters of the JS-function.
* The ``window.call``-method can also return a value

Here is a simple example:

<example-box path="docs/JavaScript_interoperability/Call_JavaScript_from_Python/examples/call_js" file="example.py"></example-box><br>
<example-box path="docs/JavaScript_interoperability/Call_JavaScript_from_Python/examples/call_js" file="index.html"></example-box>
<br>
When the button is clicked, the function ``clicked`` is called in Python. This Python-function calls the ``getName`` JavaScript-function to get an entered name by using a prompt-Dialog and returns the result. Then Python invokes the ``sayHello`` JS-function. 
