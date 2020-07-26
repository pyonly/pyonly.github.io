var Python = {
    schema: document.location.protocol === "https:" ? "wss" : "ws",
    port: document.location.port ? (":" + document.location.port) : "",
    url: this.schema + "://" + document.location.hostname + this.port + "/ws",
    websocket: null,
    

    init: function(__hostname, __port, __path){
        Python.websocket = new WebSocket(Python.schema + "://" + __hostname + ":" + __port + "/" + __path);
        Python.setEvents();
    },
    auto_init: function(){
        Python.websocket = new WebSocket(Python.schema + "://" + document.location.hostname + Python.port + "/ws");
        Python.setEvents();
    },

    setEvents: function(){
        Python.websocket.onmessage = Python.onMessage;
        Python.websocket.onclose = Python.onClose;
    },
    send: function(__s){
        Python.websocket.send(__s);
    },
    call: function(){
        if(arguments.length >= 1){
            var __args = new Array();
            for (var __i = 1; __i < arguments.length; __i++) {
                __args.push(arguments[__i]);
            }
            var __object__arguments = {
                target: "callfunc",
                func_name: arguments[0],
                args: __args
            };
            Python.send(JSON.stringify(__object__arguments));
        }
    },
    call_async: function(){
        if(arguments.length >= 1){
            var __args = new Array();
            for (var __i = 1; __i < arguments.length; __i++) {
                __args.push(arguments[__i]);
            }
            var __object__arguments = {
                target: "callfunc_async",
                func_name: arguments[0],
                args: __args
            };
            Python.send(JSON.stringify(__object__arguments));
        }
        return new Promise(function(resolve, reject) {
            Python.onCallBack = function(__e){
                resolve(__e);
            };
        });
    },
    onClose: function(){
        alert("Connection closed!");
    },
    onCallBack: function(){
        alert("ERROR CALLBACK");
    },
    onMessage: function(__e){
        args_obj = JSON.parse(__e.data);
        if(args_obj.task == "execute"){
            eval(args_obj.code);
        }else if(args_obj.task == "get"){
            var __retVal = eval(args_obj.code);
            var __object__arguments = {
                target: "get",
                args: __retVal
            };
            Python.send(JSON.stringify(__object__arguments));
        }else if(args_obj.task == "callback"){
            Python.onCallBack(args_obj.code);
        }else if(args_obj.task == "call"){
            var __retVal = window[args_obj.func_name].apply(null, args_obj.args);
            if(__retVal == undefined){
                __retVal = "undefinded";
            }
            var __object__arguments = {
                target: "get",
                args: __retVal
            };
            Python.send(JSON.stringify(__object__arguments));
        }
    }
};


