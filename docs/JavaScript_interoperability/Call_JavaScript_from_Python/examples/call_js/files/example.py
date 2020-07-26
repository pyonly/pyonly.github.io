import tornado.websocket
import tornado.web
import tornado.ioloop
from pyonly import handler


host = "localhost"
port = 8888

class App:
    def __init__(self, window):
        self.window = window
    
    async def clicked(self):
        name = await self.window.call("getName")
        await self.window.call("sayHello", name)
    

class IndexHTML(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html", host=host, port=port, path="ws")



webapp = tornado.web.Application([
    (r'/', IndexHTML),
    (r'/ws', handler.Handler(App)),
    (r"/js/(.*)", tornado.web.StaticFileHandler, {"path": "js/"}),
])

if __name__ == '__main__':
    webapp.listen(port)
    tornado.ioloop.IOLoop.instance().start()
