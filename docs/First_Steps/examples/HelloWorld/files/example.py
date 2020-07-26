import tornado.websocket
import tornado.web
import tornado.ioloop
from pyonly import handler

host = "localhost"
port = 8888

class App:
    def __init__(self, window):
        self.window = window
        self.window.document.getElementById("output").innerHTML = "Hello World!"

class Index(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html", host=host, port=port, path="ws")

webapp = tornado.web.Application([
    (r'/', Index),
    (r'/ws', handler.Handler(App)),
])

if __name__ == '__main__':
    webapp.listen(port)
    tornado.ioloop.IOLoop.instance().start()
